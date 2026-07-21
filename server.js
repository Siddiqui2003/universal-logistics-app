require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const authRoutes = require("./routes/auth");
const shipmentRoutes = require("./routes/shipments");
const hsCodeRoutes = require("./routes/hscodes");
const adminRoutes = require("./routes/admin");
const trackRoutes = require("./routes/track");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/auth", authRoutes);
app.use("/api/shipments", shipmentRoutes);
app.use("/api/hscodes", hsCodeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/track", trackRoutes);

app.get("/health", (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Universal Logistics app running at http://localhost:${PORT}`);
});
