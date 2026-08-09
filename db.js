// db.js — SQLite database setup using Node's built-in `node:sqlite` module.
// Requires Node.js >= 22.5.0. No native compilation needed.

const { DatabaseSync } = require("node:sqlite");
const path = require("path");
const fs = require("fs");

// DB_PATH can be overridden via environment variable — set this to a mounted
// persistent volume path when deploying to Railway/Render/etc, otherwise it
// defaults to a local file inside this project's data/ folder.
const DB_PATH = process.env.DB_PATH || path.join(__dirname, "data", "app.db");

// Make sure the folder for the database file exists (needed for custom volume paths)
fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });

const db = new DatabaseSync(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'customer',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS shipments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    awbnum TEXT,
    tracking_no TEXT,
    data TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Pending',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

// Lightweight migration for databases created before the role/status columns existed
function columnExists(table, column) {
  const cols = db.prepare(`PRAGMA table_info(${table})`).all();
  return cols.some((c) => c.name === column);
}
const isFreshRoleMigration = !columnExists("users", "role");
if (isFreshRoleMigration) {
  db.exec(`ALTER TABLE users ADD COLUMN role TEXT NOT NULL DEFAULT 'customer'`);
  // The very first account ever created (lowest id) predates the role system and
  // was the original owner/admin account — restore its admin role now instead of
  // leaving it demoted to 'customer' by the DEFAULT above.
  const firstUser = db.prepare("SELECT id FROM users ORDER BY id ASC LIMIT 1").get();
  if (firstUser) {
    db.prepare("UPDATE users SET role = 'admin' WHERE id = ?").run(firstUser.id);
  }
}
if (!columnExists("shipments", "status")) {
  db.exec(`ALTER TABLE shipments ADD COLUMN status TEXT NOT NULL DEFAULT 'Pending'`);
}
if (!columnExists("shipments", "tracking_no")) {
  db.exec(`ALTER TABLE shipments ADD COLUMN tracking_no TEXT`);
}
// The carrier/airline "switch" number — assigned by the actual carrier once the
// shipment is handed over to them. Not known at booking time, so the admin fills
// it in manually later from the dashboard.
if (!columnExists("shipments", "switch_no")) {
  db.exec(`ALTER TABLE shipments ADD COLUMN switch_no TEXT`);
}

// A customer's Account # and Shipper's Reference, assigned once by the admin
// when the login is created (or edited later). Once set, the booking form
// locks these two fields to the assigned values for that customer so they
// can't be changed per-shipment.
if (!columnExists("users", "account_number")) {
  db.exec(`ALTER TABLE users ADD COLUMN account_number TEXT`);
}
if (!columnExists("users", "shipper_reference")) {
  db.exec(`ALTER TABLE users ADD COLUMN shipper_reference TEXT`);
}

// Tracks the last time a customer actually opened the portal (login, or any
// authenticated page load), so the admin can see who's active. Updated on
// every successful /api/auth/me check, not just at login.
if (!columnExists("users", "last_active_at")) {
  db.exec(`ALTER TABLE users ADD COLUMN last_active_at TEXT`);
}

// Rolling 30-day activity log — one row per portal "open" (login or page
// load), throttled so repeated page loads within a short window don't spam
// the log. Old rows are pruned automatically so this never grows unbounded.
db.exec(`
  CREATE TABLE IF NOT EXISTS activity_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    event_time TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

// Tracking timeline: each row is one checkpoint/update in a shipment's journey
// (e.g. "Shipment Created", "Customs Clearance", "Arrived", "Delivered"), with
// a country/location and a date-time that the admin sets manually. Shown as a
// timeline on the public tracking page.
db.exec(`
  CREATE TABLE IF NOT EXISTS tracking_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shipment_id INTEGER NOT NULL,
    status TEXT NOT NULL,
    country TEXT,
    event_time TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (shipment_id) REFERENCES shipments(id)
  );
`);

// Safety net: if for any reason there is no admin at all (e.g. manual DB edits),
// promote the earliest account so the app always has someone who can manage it.
const adminCount = db.prepare("SELECT COUNT(*) AS n FROM users WHERE role = 'admin'").get().n;
if (adminCount === 0) {
  const firstUser = db.prepare("SELECT id FROM users ORDER BY id ASC LIMIT 1").get();
  if (firstUser) {
    db.prepare("UPDATE users SET role = 'admin' WHERE id = ?").run(firstUser.id);
  }
}

module.exports = db;
