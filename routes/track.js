const express = require("express");
const db = require("../db");

const router = express.Router();

// Public tracking endpoint — no login required. Returns only the minimal,
// non-sensitive info needed to show a shipment's status (no pricing, HS
// codes, or full addresses).
router.get("/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM shipments WHERE id = ?").get(req.params.id);
  if (!row) return res.status(404).json({ error: "Shipment not found" });

  const parsed = JSON.parse(row.data);
  const form = parsed.form || {};

  res.json({
    awbnum: row.awbnum,
    trackingNo: row.tracking_no,
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
  });
});

module.exports = router;
