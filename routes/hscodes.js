const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Load once into memory at startup (fast substring search over ~7,200 entries)
const HS_DATA = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "data", "hs_codes.json"), "utf8")
);

router.get("/", (req, res) => {
  const q = (req.query.q || "").trim().toLowerCase();
  if (q.length < 2) return res.json({ results: [] });

  const results = [];
  for (let i = 0; i < HS_DATA.length; i++) {
    const item = HS_DATA[i];
    if (item.d.toLowerCase().indexOf(q) !== -1 || item.c.indexOf(q) !== -1) {
      results.push(item);
      if (results.length >= 25) break;
    }
  }
  res.json({ results });
});

module.exports = router;
