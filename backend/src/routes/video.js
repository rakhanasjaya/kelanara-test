const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

const { authenticate, isAdmin } = require("../middleware/auth");

// GET /videos
router.get("/", async (req, res) => {
    try {
        const all = await prisma.video.findMany({
            where: { status: "published" },
        });
        res.status(200).json({
            message: "Fetched all published videos successfully",
            status: 200,
            data: all,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch videos",
            status: 500,
            error: error.message,
            data: null,
        });
    }
});

router.get("/drafts", authenticate, isAdmin, async (req, res) => {
    try {
        const drafts = await prisma.video.findMany();
        res.status(200).json({
            message: "Fetched all videos successfully",
            status: 200,
            data: drafts,
        });
    } catch (error) {}
});

// GET /videos/:id
router.get("/:id", authenticate, async (req, res) => {
    try {
        const id = Number(req.params.id);
        const video = await prisma.video.findUnique({
            where: { id },
        });
        if (!video) {
            return res.status(404).json({
                message: "Video not found",
                status: 404,
                data: null,
            });
        }
        res.status(200).json({
            message: "Fetched video successfully",
            status: 200,
            data: video,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch video",
            status: 500,
            error: error.message,
            data: null,
        });
    }
});

// POST /videos
router.post("/", authenticate, isAdmin, async (req, res) => {
    try {
        const {
            title,
            description,
            video_url,
            status = "draft",
            category,
        } = req.body;
        const newVideo = await prisma.video.create({
            data: {
                title,
                description,
                video_url,
                status,
                category,
            },
        });
        res.status(201).json({
            message: "Video created successfully",
            status: 201,
            data: newVideo,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to create video",
            status: 500,
            error: error.message,
            data: null,
        });
    }
});

// PATCH /videos/:id
router.post("/update/:id", authenticate, isAdmin, async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, description, video_url, status, category } = req.body;
        const updated = await prisma.video.update({
            where: { id },
            data: { title, description, video_url, status, category },
        });
        res.status(200).json({
            message: "Video updated successfully",
            status: 200,
            data: updated,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to update video",
            status: 500,
            error: error.message,
            data: null,
        });
    }
});

// DELETE /videos/:id
router.delete("/:id", authenticate, isAdmin, async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma.video.delete({ where: { id } });
        res.status(200).json({
            message: "Video deleted successfully",
            status: 200,
            data: null,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to delete video",
            status: 500,
            error: error.message,
            data: null,
        });
    }
});

module.exports = router;
