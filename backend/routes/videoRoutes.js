const express = require("express");
const Video = require("../models/Video.js");
const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();

// Upload Video (Only for YouTubers)
router.post("/upload", authMiddleware, async (req, res) => {
    try {
        const { title, description, youtubeLink } = req.body;
        if (req.user.role !== "youtuber" && req.user.role !== "admin") {
            return res.status(403).json({ message: "Access denied" });
        }
        const video = new Video({ title, description, youtubeLink, uploader: req.user.id });
        await video.save();
        res.status(201).json(video);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch All Videos
router.get("/", async (req, res) => {
    try {
        const videos = await Video.find().populate("uploader", "name");
        res.json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;;
