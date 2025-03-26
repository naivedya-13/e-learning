const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    youtubeLink: { type: String, required: true },
    uploader: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });


module.exports = mongoose.model("Video", videoSchema);