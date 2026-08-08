const express = require("express");
const db = require("../db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();
router.use(requireAuth);

function isAdmin(req) {
  return req.user.role === "admin";
}

// Generates a random 7-digit tracking number and makes sure it isn't already
// in use by another shipment (extremely unlikely to collide, but we check anyway).
function generateTrackingNo() {
  for (let attempt = 0; attempt < 20; attempt++) {
    const candidate = String(Math.floor(1000000 + Math.random() * 9000000)); // 1000000-9999999
    const existing = db.prepare("SELECT id FROM shipments WHERE tracking_no = ?").get(candidate);
    if (!existing) return candidate;
  }
  // Extremely unlikely fallback: timestamp-based 7 digits
  return String(Date.now()).slice(-7);
}

// Normalizes an admin-supplied date/time (from separate <input type=date> and
// <input type=time> fields, joined client-side as "YYYY-MM-DD HH:MM") into the
// same text format SQLite's datetime('now') produces. Falls back to "now" for
// anything missing or malformed, so a bad value never breaks event creation.
function resolveEventTime(input) {
  const normalized = String(input || "").trim().replace("T", " ");
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$/.test(normalized)) {
    return normalized.length === 16 ? normalized + ":00" : normalized;
  }
  return db.prepare("SELECT datetime('now') AS t").get().t;
}

function getEvents(shipmentId) {
  return db
    .prepare("SELECT id, status, country, event_time FROM tracking_events WHERE shipment_id = ? ORDER BY event_time ASC, id ASC")
    .all(shipmentId)
    .map((e) => ({ id: e.id, status: e.status, country: e.country || "", eventTime: e.event_time }));
}

// ---------- LIST shipments ----------
// Admin sees every shipment from every customer. Customers see only their own.
router.get("/", (req, res) => {
  const rows = isAdmin(req)
    ? db
        .prepare(
          `SELECT s.id, s.awbnum, s.tracking_no, s.switch_no, s.data, s.status, s.created_at, s.updated_at,
                  u.name AS customer_name
           FROM shipments s JOIN users u ON u.id = s.user_id
           ORDER BY s.updated_at DESC`
        )
        .all()
    : db
        .prepare(
          "SELECT id, awbnum, tracking_no, switch_no, data, status, created_at, updated_at FROM shipments WHERE user_id = ? ORDER BY updated_at DESC"
        )
        .all(req.user.id);

  const shipments = rows.map((r) => {
    const parsed = JSON.parse(r.data);
    const f = parsed.form || {};
    return {
      id: r.id,
      awbnum: r.awbnum,
      trackingNo: r.tracking_no,
      switchNo: r.switch_no || "",
      status: r.status,
      customerName: r.customer_name,
      shipperName: f.shipperName || "",
      consigneeName: f.consigneeName || "",
      service: f.service || "",
      destination: f.destination || "",
      created_at: r.created_at,
      updated_at: r.updated_at,
    };
  });
  res.json({ shipments });
});

// ---------- GET a single shipment ----------
router.get("/:id", (req, res) => {
  const row = isAdmin(req)
    ? db.prepare("SELECT * FROM shipments WHERE id = ?").get(req.params.id)
    : db.prepare("SELECT * FROM shipments WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);

  if (!row) return res.status(404).json({ error: "Shipment not found" });

  // Backfill a tracking number for shipments created before this feature existed.
  let trackingNo = row.tracking_no;
  if (!trackingNo) {
    trackingNo = generateTrackingNo();
    db.prepare("UPDATE shipments SET tracking_no = ? WHERE id = ?").run(trackingNo, row.id);
  }

  res.json({
    id: row.id,
    awbnum: row.awbnum,
    trackingNo,
    switchNo: row.switch_no || "",
    status: row.status,
    ...JSON.parse(row.data),
    created_at: row.created_at,
    updated_at: row.updated_at,
    events: getEvents(row.id),
  });
});

// ---------- CREATE a new shipment / booking ----------
router.post("/", (req, res) => {
  const { form, products, showTnc, showInvoice, copies, status } = req.body || {};
  if (!form) return res.status(400).json({ error: "Missing form data" });

  // Customers always start a new booking as "Pending" — only the admin can set a
  // different status. This keeps the booking review workflow trustworthy.
  const finalStatus = isAdmin(req) ? status || "Pending" : "Pending";
  const trackingNo = generateTrackingNo();

  const data = JSON.stringify({ form, products: products || [], showTnc, showInvoice, copies });
  const result = db
    .prepare("INSERT INTO shipments (user_id, awbnum, tracking_no, data, status) VALUES (?, ?, ?, ?, ?)")
    .run(req.user.id, form.awbnum || "", trackingNo, data, finalStatus);

  const shipmentId = Number(result.lastInsertRowid);

  // Every shipment automatically starts its tracking timeline with a "Shipment
  // Created" checkpoint — the admin adds further checkpoints (customs, transit,
  // arrival, delivery, etc.) manually as the shipment actually moves.
  db.prepare(
    "INSERT INTO tracking_events (shipment_id, status, country, event_time) VALUES (?, 'Shipment Created', ?, datetime('now'))"
  ).run(shipmentId, form.shipperCountry || "");

  res.json({ id: shipmentId, trackingNo });
});

// ---------- DUPLICATE an existing shipment ----------
// Copies all shipper/consignee/cargo details into a brand-new booking so repeat
// shipments don't have to be typed out again. The AWB number is cleared (a
// duplicate physical waybill would be wrong) and a fresh tracking number /
// tracking timeline is generated, just like any new shipment.
router.post("/:id/duplicate", (req, res) => {
  const existing = isAdmin(req)
    ? db.prepare("SELECT * FROM shipments WHERE id = ?").get(req.params.id)
    : db.prepare("SELECT * FROM shipments WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);

  if (!existing) return res.status(404).json({ error: "Shipment not found" });

  const parsed = JSON.parse(existing.data);
  const newForm = { ...(parsed.form || {}), awbnum: "" };
  const data = JSON.stringify({ ...parsed, form: newForm });
  const trackingNo = generateTrackingNo();

  const result = db
    .prepare("INSERT INTO shipments (user_id, awbnum, tracking_no, data, status) VALUES (?, ?, ?, ?, 'Pending')")
    .run(req.user.id, "", trackingNo, data);

  const shipmentId = Number(result.lastInsertRowid);

  db.prepare(
    "INSERT INTO tracking_events (shipment_id, status, country, event_time) VALUES (?, 'Shipment Created', ?, datetime('now'))"
  ).run(shipmentId, newForm.shipperCountry || "");

  res.json({ id: shipmentId, trackingNo });
});

// ---------- UPDATE an existing shipment ----------
router.put("/:id", (req, res) => {
  const existing = isAdmin(req)
    ? db.prepare("SELECT id, status, switch_no FROM shipments WHERE id = ?").get(req.params.id)
    : db.prepare("SELECT id, status, switch_no FROM shipments WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);

  if (!existing) return res.status(404).json({ error: "Shipment not found" });
  if (!isAdmin(req) && existing.status !== "Pending") {
    return res.status(403).json({
      error: `This shipment is already "${existing.status}" and can no longer be edited. Please contact the admin.`,
    });
  }

  const { form, products, showTnc, showInvoice, copies, status, switchNo } = req.body || {};
  const data = JSON.stringify({ form, products: products || [], showTnc, showInvoice, copies });

  // Only the admin is allowed to change status (e.g. Pending -> Confirmed) or set
  // the carrier's switch/consignment number, which is only known once the shipment
  // has actually been handed over to the carrier.
  const finalStatus = isAdmin(req) && status ? status : existing.status;
  const finalSwitchNo = isAdmin(req) && switchNo !== undefined ? switchNo : existing.switch_no;

  db.prepare(
    "UPDATE shipments SET awbnum = ?, data = ?, status = ?, switch_no = ?, updated_at = datetime('now') WHERE id = ?"
  ).run(form.awbnum || "", data, finalStatus, finalSwitchNo, req.params.id);

  res.json({ ok: true });
});

// ---------- DELETE a shipment ----------
router.delete("/:id", (req, res) => {
  const existing = isAdmin(req)
    ? db.prepare("SELECT id, status FROM shipments WHERE id = ?").get(req.params.id)
    : db.prepare("SELECT id, status FROM shipments WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);

  if (!existing) return res.status(404).json({ error: "Shipment not found" });
  if (!isAdmin(req) && existing.status !== "Pending") {
    return res.status(403).json({
      error: `This shipment is already "${existing.status}" and can no longer be deleted. Please contact the admin.`,
    });
  }

  try {
    // tracking_events has a foreign key on shipment_id with no ON DELETE
    // CASCADE, and Node's built-in sqlite module enforces foreign keys by
    // default — so any tracking history has to be cleared first, or the
    // shipment delete below is silently rejected by the DB.
    db.prepare("DELETE FROM tracking_events WHERE shipment_id = ?").run(req.params.id);
    db.prepare("DELETE FROM shipments WHERE id = ?").run(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    console.error("Failed to delete shipment", req.params.id, err);
    res.status(500).json({ error: "Could not delete this shipment due to a server error." });
  }
});

// ---------- TRACKING TIMELINE ----------

// LIST tracking checkpoints for a shipment (owner customer or admin).
router.get("/:id/events", (req, res) => {
  const existing = isAdmin(req)
    ? db.prepare("SELECT id FROM shipments WHERE id = ?").get(req.params.id)
    : db.prepare("SELECT id FROM shipments WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);

  if (!existing) return res.status(404).json({ error: "Shipment not found" });
  res.json({ events: getEvents(req.params.id) });
});

// ADD a tracking checkpoint — admin only. This is the manual "control from the
// center" step: pick a stage (or type a custom one), a country, and a date/time.
router.post("/:id/events", (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "Only the admin can add tracking updates" });

  const existing = db.prepare("SELECT id FROM shipments WHERE id = ?").get(req.params.id);
  if (!existing) return res.status(404).json({ error: "Shipment not found" });

  const { status, country, eventTime } = req.body || {};
  const cleanStatus = String(status || "").trim();
  if (!cleanStatus) return res.status(400).json({ error: "Status/stage is required" });

  const resolvedTime = resolveEventTime(eventTime);
  const result = db
    .prepare("INSERT INTO tracking_events (shipment_id, status, country, event_time) VALUES (?, ?, ?, ?)")
    .run(req.params.id, cleanStatus, String(country || "").trim(), resolvedTime);

  db.prepare("UPDATE shipments SET updated_at = datetime('now') WHERE id = ?").run(req.params.id);

  res.json({ id: Number(result.lastInsertRowid), status: cleanStatus, country: country || "", eventTime: resolvedTime });
});

// DELETE a tracking checkpoint — admin only (for correcting a mistaken entry).
router.delete("/:id/events/:eventId", (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "Only the admin can remove tracking updates" });

  const existing = db
    .prepare("SELECT id FROM tracking_events WHERE id = ? AND shipment_id = ?")
    .get(req.params.eventId, req.params.id);
  if (!existing) return res.status(404).json({ error: "Tracking update not found" });

  db.prepare("DELETE FROM tracking_events WHERE id = ?").run(req.params.eventId);
  res.json({ ok: true });
});

module.exports = router;
