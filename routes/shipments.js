const express = require("express");
const db = require("../db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();
router.use(requireAuth);

// ---------- LIST all shipments created by the logged-in user ----------
router.get("/", (req, res) => {
  const rows = db
    .prepare(
      "SELECT id, awbnum, data, created_at, updated_at FROM shipments WHERE user_id = ? ORDER BY updated_at DESC"
    )
    .all(req.user.id);

  const shipments = rows.map((r) => {
    const parsed = JSON.parse(r.data);
    return {
      id: r.id,
      awbnum: r.awbnum,
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
  const row = db
    .prepare("SELECT * FROM shipments WHERE id = ? AND user_id = ?")
    .get(req.params.id, req.user.id);
  if (!row) return res.status(404).json({ error: "Shipment not found" });
  res.json({
    id: row.id,
    awbnum: row.awbnum,
    ...JSON.parse(row.data),
    created_at: row.created_at,
    updated_at: row.updated_at,
  });
});

// ---------- CREATE a new shipment ----------
router.post("/", (req, res) => {
  const { form, products, showTnc, showInvoice, copies } = req.body || {};
  if (!form) return res.status(400).json({ error: "Missing form data" });

  const data = JSON.stringify({ form, products: products || [], showTnc, showInvoice, copies });
  const result = db
    .prepare("INSERT INTO shipments (user_id, awbnum, data) VALUES (?, ?, ?)")
    .run(req.user.id, form.awbnum || "", data);

  res.json({ id: Number(result.lastInsertRowid) });
});

// ---------- UPDATE an existing shipment ----------
router.put("/:id", (req, res) => {
  const existing = db
    .prepare("SELECT id FROM shipments WHERE id = ? AND user_id = ?")
    .get(req.params.id, req.user.id);
  if (!existing) return res.status(404).json({ error: "Shipment not found" });

  const { form, products, showTnc, showInvoice, copies } = req.body || {};
  const data = JSON.stringify({ form, products: products || [], showTnc, showInvoice, copies });

  db.prepare(
    "UPDATE shipments SET awbnum = ?, data = ?, updated_at = datetime('now') WHERE id = ?"
  ).run(form.awbnum || "", data, req.params.id);

  res.json({ ok: true });
});

// ---------- DELETE a shipment ----------
router.delete("/:id", (req, res) => {
  const existing = db
    .prepare("SELECT id FROM shipments WHERE id = ? AND user_id = ?")
    .get(req.params.id, req.user.id);
  if (!existing) return res.status(404).json({ error: "Shipment not found" });

  db.prepare("DELETE FROM shipments WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});

module.exports = router;
