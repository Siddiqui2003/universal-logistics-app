const express = require("express");
const db = require("../db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();
router.use(requireAuth);

function isAdmin(req) {
  return req.user.role === "admin";
}

// ---------- LIST shipments ----------
// Admin sees every shipment from every customer. Customers see only their own.
router.get("/", (req, res) => {
  const rows = isAdmin(req)
    ? db
        .prepare(
          `SELECT s.id, s.awbnum, s.data, s.status, s.created_at, s.updated_at,
                  u.name AS customer_name
           FROM shipments s JOIN users u ON u.id = s.user_id
           ORDER BY s.updated_at DESC`
        )
        .all()
    : db
        .prepare(
          "SELECT id, awbnum, data, status, created_at, updated_at FROM shipments WHERE user_id = ? ORDER BY updated_at DESC"
        )
        .all(req.user.id);

  const shipments = rows.map((r) => {
    const parsed = JSON.parse(r.data);
    return {
      id: r.id,
      awbnum: r.awbnum,
      status: r.status,
      customerName: r.customer_name,
      shipperName: parsed.form ? parsed.form.shipperName : "",
      consigneeName: parsed.form ? parsed.form.consigneeName : "",
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
  res.json({
    id: row.id,
    awbnum: row.awbnum,
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

  const data = JSON.stringify({ form, products: products || [], showTnc, showInvoice, copies });
  const result = db
    .prepare("INSERT INTO shipments (user_id, awbnum, data, status) VALUES (?, ?, ?, ?)")
    .run(req.user.id, form.awbnum || "", data, finalStatus);

  res.json({ id: Number(result.lastInsertRowid) });
});

// ---------- UPDATE an existing shipment ----------
router.put("/:id", (req, res) => {
  const existing = isAdmin(req)
    ? db.prepare("SELECT id, status FROM shipments WHERE id = ?").get(req.params.id)
    : db.prepare("SELECT id, status FROM shipments WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);

  if (!existing) return res.status(404).json({ error: "Shipment not found" });

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
    ? db.prepare("SELECT id FROM shipments WHERE id = ?").get(req.params.id)
    : db.prepare("SELECT id FROM shipments WHERE id = ? AND user_id = ?").get(req.params.id, req.user.id);

  if (!existing) return res.status(404).json({ error: "Shipment not found" });

  db.prepare("DELETE FROM shipments WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});

module.exports = router;
