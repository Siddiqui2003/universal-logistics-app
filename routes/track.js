const express = require("express");
const db = require("../db");

const router = express.Router();

// Public tracking endpoint — no login required. Returns only the minimal,
// non-sensitive info needed to show a shipment's status (no pricing, HS
// codes, or full addresses).
//
// Accepts EITHER an internal shipment id (used by the QR code on printed
// AWBs) OR the human-typed airway bill / tracking number (used when someone
// manually types their AWB number into the tracking page). We try the id
// first, then fall back to matching awbnum / tracking_no so a single search
// box on the tracking page can handle all three cases.
router.get("/:id", (req, res) => {
  const query = String(req.params.id || "").trim();

  let row = null;
  if (/^\d+$/.test(query)) {
    row = db.prepare("SELECT * FROM shipments WHERE id = ?").get(query);
  }
  if (!row) {
    row = db
      .prepare(
        `SELECT * FROM shipments
         WHERE awbnum = ? COLLATE NOCASE OR tracking_no = ? COLLATE NOCASE OR switch_no = ? COLLATE NOCASE
         ORDER BY updated_at DESC LIMIT 1`
      )
      .get(query, query, query);
  }

  if (!row) return res.status(404).json({ error: "Shipment not found" });

  const parsed = JSON.parse(row.data);
  const form = parsed.form || {};

  const events = db
    .prepare("SELECT status, country, event_time FROM tracking_events WHERE shipment_id = ? ORDER BY event_time ASC, id ASC")
    .all(row.id)
    .map((e) => ({ status: e.status, country: e.country || "", eventTime: e.event_time }));

  res.json({
    awbnum: row.awbnum,
    trackingNo: row.tracking_no,
    switchNo: row.switch_no || "",
    status: row.status,
    shipperName: form.shipperName || "",
    shipperCity: form.shipperCity || "",
    shipperCountry: form.shipperCountry || "",
    consigneeName: form.consigneeName || "",
    consigneeCity: form.consigneeCity || "",
    consigneeCountry: form.consigneeCountry || "",
    pieces: form.pieces || "",
    weight: form.weight || "",
    created_at: row.created_at,
    updated_at: row.updated_at,
    events,
  });
});

module.exports = router;
