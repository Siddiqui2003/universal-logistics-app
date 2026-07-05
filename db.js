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
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS shipments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    awbnum TEXT,
    data TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

module.exports = db;
