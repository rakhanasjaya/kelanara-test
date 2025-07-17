// src/middleware/auth.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Verifies JWT and attaches payload to req.user.
 */
function authenticate(req, res, next) {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Authentication required" });
    }
    const token = header.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // payload should contain at least { userId, role }
        req.user = { id: payload.userId, role: payload.role };
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

/**
 * Checks that req.user.role === 'admin'
 * Must be used *after* authenticate()
 */
function isAdmin(req, res, next) {
    if (!req.user) {
        return res.status(401).json({ error: "Authentication required" });
    }
    if (req.user.role !== "admin") {
        return res.status(403).json({ error: "Admin privileges required" });
    }
    next();
}

module.exports = { authenticate, isAdmin };
