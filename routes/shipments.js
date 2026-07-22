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

// ---------- LIST shipments ----------
// Admin sees every shipment from every customer. Customers see only their own.
router.get("/", (req, res) => {
  const rows = isAdmin(req)
    ? db
        .prepare(
          `SELECT s.id, s.awbnum, s.tracking_no, s.data, s.status, s.created_at, s.updated_at,
                  u.name AS customer_name
           FROM shipments s JOIN users u ON u.id = s.user_id
           ORDER BY s.updated_at DESC`
        )
        .all()
    : db
        .prepare(
          "SELECT id, awbnum, tracking_no, data, status, created_at, updated_at FROM shipments WHERE user_id = ? ORDER BY updated_at DESC"
        )
        .all(req.user.id);

  const shipments = rows.map((r) => {
    const parsed = JSON.parse(r.data);
    const f = parsed.form || {};
    return {
      id: r.id,
      awbnum: r.awbnum,
      trackingNo: r.tracking_no,
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
    status: row.status,
    ...JSON.parse(row.data),
    created_at: row.created_at,
    updated_at: row.updated_at,
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

  res.json({ id: Number(result.lastInsertRowid), trackingNo });
});

// ---------- UPDATE an existing shipment ----------
router.put("/:id", (req, res) => {
  const existing = isAdmin(req)
    ? db.prepare("SELECT id, status FROM shipments WHERE id = ?").get(req.params.id)
    : db.prepare("SELECT id, status FROM shipments WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);

  if (!existing) return res.status(404).json({ error: "Shipment not found" });
  if (!isAdmin(req) && existing.status !== "Pending") {
    return res.status(403).json({
      error: `This shipment is already "${existing.status}" and can no longer be edited. Please contact the admin.`,
    });
  }

  const { form, products, showTnc, showInvoice, copies, status } = req.body || {};
  const data = JSON.stringify({ form, products: products || [], showTnc, showInvoice, copies });

  // Only the admin is allowed to change status (e.g. Pending -> Confirmed).
  const finalStatus = isAdmin(req) && status ? status : existing.status;

  db.prepare(
    "UPDATE shipments SET awbnum = ?, data = ?, status = ?, updated_at = datetime('now') WHERE id = ?"
  ).run(form.awbnum || "", data, finalStatus, req.params.id);

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

  db.prepare("DELETE FROM shipments WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});

module.exports = router;
