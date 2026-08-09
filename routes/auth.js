const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");
const { JWT_SECRET, requireAuth } = require("../middleware/auth");

const router = express.Router();

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  // secure: true, // enable this once you serve the app over HTTPS
};

// Records one "portal opened" event for the user, throttled to at most one
// entry per 15 minutes so normal page-to-page navigation doesn't flood the
// log — this keeps the 30-day history meaningful (sessions, not clicks).
// Also prunes that user's entries older than 30 days on every call.
function recordActivity(userId) {
  const recent = db
    .prepare("SELECT event_time FROM activity_log WHERE user_id = ? ORDER BY id DESC LIMIT 1")
    .get(userId);
  const throttleOk =
    !recent || Date.now() - new Date(recent.event_time.replace(" ", "T") + "Z").getTime() > 15 * 60 * 1000;
  if (throttleOk) {
    db.prepare("INSERT INTO activity_log (user_id, event_time) VALUES (?, datetime('now'))").run(userId);
  }
  db.prepare("DELETE FROM activity_log WHERE user_id = ? AND event_time < datetime('now', '-30 days')").run(
    userId
  );
}

// ---------- REGISTER ----------
// The very first account created on a fresh database automatically becomes the
// Admin. After that, public registration is closed — the Admin creates
// customer logins from the "Manage Customers" page instead.
router.post("/register", (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email, and password are required" });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters" });
  }

  const userCount = db.prepare("SELECT COUNT(*) AS n FROM users").get().n;
  if (userCount > 0) {
    return res.status(403).json({
      error: "Public registration is closed. Please ask your administrator for a login.",
    });
  }

  const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email.toLowerCase());
  if (existing) {
    return res.status(409).json({ error: "An account with this email already exists" });
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const result = db
    .prepare("INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, 'admin')")
    .run(name, email.toLowerCase(), passwordHash);

  const user = { id: Number(result.lastInsertRowid), name, email: email.toLowerCase(), role: "admin" };
  const token = jwt.sign(user, JWT_SECRET, { expiresIn: "7d" });
  res.cookie("token", token, COOKIE_OPTIONS);
  res.json({ user });
});

// ---------- LOGIN ----------
router.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const row = db.prepare("SELECT * FROM users WHERE email = ?").get(email.toLowerCase());
  if (!row || !bcrypt.compareSync(password, row.password_hash)) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const user = { id: row.id, name: row.name, email: row.email, role: row.role };
  const token = jwt.sign(user, JWT_SECRET, { expiresIn: "7d" });
  res.cookie("token", token, COOKIE_OPTIONS);
  db.prepare("UPDATE users SET last_active_at = datetime('now') WHERE id = ?").run(row.id);
  recordActivity(row.id);
  res.json({ user });
});

// ---------- LOGOUT ----------
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ ok: true });
});

// ---------- CURRENT USER ----------
// Looked up fresh from the DB (rather than trusting the JWT payload) so that
// an Account # / Shipper's Reference the admin assigns or edits later shows
// up immediately, without the customer needing to log in again.
router.get("/me", requireAuth, (req, res) => {
  const row = db
    .prepare("SELECT id, name, email, role, account_number, shipper_reference FROM users WHERE id = ?")
    .get(req.user.id);
  if (!row) return res.status(401).json({ error: "Invalid or expired session, please login again" });

  // Every authenticated page load hits /me, so this doubles as a "last opened
  // the portal" heartbeat the admin can see on the Manage Customers page.
  db.prepare("UPDATE users SET last_active_at = datetime('now') WHERE id = ?").run(row.id);
  recordActivity(row.id);

  res.json({
    user: {
      id: row.id,
      name: row.name,
      email: row.email,
      role: row.role,
      accountNumber: row.account_number || "",
      shipperReference: row.shipper_reference || "",
    },
  });
});

module.exports = router;
