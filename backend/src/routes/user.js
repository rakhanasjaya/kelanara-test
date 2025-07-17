const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();
const SALT_ROUNDS = 10;

// POST /users/register
router.post("/register", async (req, res) => {
    try {
        const { email, password, role = "user" } = req.body;

        // cek email sudah terdaftar?
        const exists = await prisma.user.findUnique({ where: { email } });
        if (exists) {
            return res.status(400).json({
                message: "Email already in use",
                status: 400,
                data: null,
            });
        }

        // hash password
        const hash = await bcrypt.hash(password, SALT_ROUNDS);

        // simpan user
        const user = await prisma.user.create({
            data: {
                email,
                password_hash: hash,
                role,
            },
            select: {
                id: true,
                email: true,
                role: true,
                created_at: true,
            },
        });

        res.status(201).json({
            message: "User registered successfully",
            status: 201,
            data: user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to register user",
            status: 500,
            error: error.message,
            data: null,
        });
    }
});

// POST /users/login
router.post("/login", async (req, res) => {
    try {
        const { email, password, rememberMe = false } = req.body;

        // ambil user
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
                status: 401,
                data: null,
            });
        }

        // cocokkan password
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            return res.status(401).json({
                message: "Invalid email or password",
                status: 401,
                data: null,
            });
        }

        // generate JWT
        const token = jwt.sign(
            { sub: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: rememberMe == true ? "48h" : "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            status: 200,
            data: { token },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to login",
            status: 500,
            error: error.message,
            data: null,
        });
    }
});

module.exports = router;
