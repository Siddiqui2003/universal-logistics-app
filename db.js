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
