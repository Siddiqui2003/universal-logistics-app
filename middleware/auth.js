const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "change-this-secret-in-production";

function requireAuth(req, res, next) {
  const token = req.cookies && req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Login required" });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload; // { id, name, email, role }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired session, please login again" });
  }
}

function requireAdmin(req, res, next) {
  requireAuth(req, res, () => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Admins only" });
    }
    next();
  });
}

module.exports = { requireAuth, requireAdmin, JWT_SECRET };
