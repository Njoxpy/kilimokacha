require("dotenv").config();
require("./config/passport");
const passport = require("passport");
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// passport
app.use(passport.initialize());

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Static file serving for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const marketRoutes = require("./routes/market.routes");
const blogRoutes = require("./routes/blog.routes");
const announcementRoutes = require("./routes/announcement.routes");
const expertAdviceRoutes = require("./routes/advice.routes");
const userRoutes = require("./routes/user.routes");
const subscribeRoutes = require("./routes/subscribe.routes");

// Connect DB
const connectDB = require("./config/DB");

// Use routes
app.use("/api/v1/crops", marketRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/announcements", announcementRoutes);
app.use("/api/v1/expert-advices", expertAdviceRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/subscribe", subscribeRoutes);

// Middleware
app.use(morgan("dev"));

// Connect to MongoDB
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: http://localhost:${process.env.PORT}`);
});
