const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const videoRoutes = require("./routes/videoRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/videos", videoRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));
