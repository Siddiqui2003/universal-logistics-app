const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db");
const { requireAdmin } = require("../middleware/auth");

const router = express.Router();
router.use(requireAdmin);

// ---------- LIST all customer accounts ----------
router.get("/customers", (req, res) => {
  const rows = db
    .prepare("SELECT id, name, email, created_at FROM users WHERE role = 'customer' ORDER BY created_at DESC")
    .all();
  res.json({ customers: rows });
});

// ---------- CREATE a new customer login ----------
router.post("/customers", (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email, and password are required" });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters" });
  }

  const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email.toLowerCase());
  if (existing) {
    return res.status(409).json({ error: "An account with this email already exists" });
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const result = db
    .prepare("INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, 'customer')")
    .run(name, email.toLowerCase(), passwordHash);

  res.json({ id: Number(result.lastInsertRowid) });
});

// ---------- DELETE a customer account ----------
router.delete("/customers/:id", (req, res) => {
  const row = db.prepare("SELECT id FROM users WHERE id = ? AND role = 'customer'").get(req.params.id);
  if (!row) return res.status(404).json({ error: "Customer not found" });

  db.prepare("DELETE FROM shipments WHERE user_id = ?").run(req.params.id);
  db.prepare("DELETE FROM users WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});

// ---------- LIST every shipment/booking from every customer ----------
router.get("/shipments", (req, res) => {
  const rows = db
    .prepare(
      `SELECT s.id, s.awbnum, s.tracking_no, s.data, s.status, s.created_at, s.updated_at,
              u.name AS customer_name, u.email AS customer_email
       FROM shipments s
       JOIN users u ON u.id = s.user_id
       ORDER BY s.updated_at DESC`
    )
    .all();

  const shipments = rows.map((r) => {
    const parsed = JSON.parse(r.data);
    return {
      id: r.id,
      awbnum: r.awbnum,
      trackingNo: r.tracking_no,
      status: r.status,
      customerName: r.customer_name,
      customerEmail: r.customer_email,
      shipperName: parsed.form ? parsed.form.shipperName : "",
      consigneeName: parsed.form ? parsed.form.consigneeName : "",
      created_at: r.created_at,
      updated_at: r.updated_at,
    };
  });
  res.json({ shipments });
});

module.exports = router;
