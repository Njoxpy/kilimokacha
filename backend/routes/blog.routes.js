const express = require("express");
const path = require("path");
const multer = require("multer");
const blogRouter = express.Router();

// controllers
const {
  getAllBlogs,
  createBlog,
  getBlogBydId,
  updateBlogById,
  deleteBlogById,
} = require("../controllers/blog.controller");

// models
const Blog = require("../models/BlogModels");

// response status code
const { BAD_REQUEST } = require("../constants/responseCode");

// middleware
const validateObjectId = require("../middleware/validateObjectId");

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// GET: get blogs
// POST: add blog
blogRouter.post("/", upload.single("image"), async (req, res) => {
  const { title, body, category } = req.body;
  const thumbnail_image = req.file ? req.file.filename : null;

  if (!title || !body) {
    return res.json({ message: "all required fields must be filled" });
  }

  console.log(title.length);
  console.log(body.length);
  // validate title and body length
  if (title.length < 40 || title.length > 60) {
    return res.status(BAD_REQUEST).json({
      message: "Title should be between 40 and 60 characters",
    });
  }

  if (body.length < 300 || body.length > 3000) {
    return res
      .status(BAD_REQUEST)
      .json({ message: "body should be between 300 to 3000 characters" });
  }

  // validate category
  try {
    const blog = await Blog.create({
      title,
      body,
      category,
      image: `/uploads/${thumbnail_image}`,
    });
    res.status(200).json(blog);
  } catch (error) {
    res
      .status(400)
      .json({ message: "failed to create blog", details: error.message });
  }
});

blogRouter.get("/", getAllBlogs);

// GET: get by search
blogRouter.get("/search", (req, res) => {
  const query = req.query.query; // Access the query parameter from req.query
  if (query) {
    res.json({ message: `You searched for: ${query}` });
  } else {
    res.json({ message: "No search query provided" });
  }
});

// get blog by id
blogRouter.get("/:id", validateObjectId, getBlogBydId);

// update blog by id
blogRouter.patch("/:id", validateObjectId, updateBlogById);

// delete blog by id
blogRouter.delete("/:id", validateObjectId, deleteBlogById);

// filtering blog by category

module.exports = blogRouter;
