const express = require('express')
const multer = require("multer")
const { getAllBlogs, createBlog, getBlogBydId, updateBlogById, deleteBlogById } = require('../controllers/blog.controller')
const Blog = require("../models/BlogModels")

const blogRouter = express.Router()

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Destination folder for storing images
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // e.g., image-1597751381573.jpg
    }
});

const upload = multer({ storage: storage });


// GET: get blogs
// POST: add blog
blogRouter.post("/new", upload.single("image"), async (req, res) => {
    const { title, body, author, category, thumbnail_image } = req.body
    const image = req.file ? req.file.filename : null; // The image file name from Multer

    if (!title || !body || !author || !category || !thumbnail_image) {
        return res.json({ message: "all required fields must be filled" })
    }
    try {
        const blog = await Blog.create({
            title, body, author, category, thumbnail_image: `/uploads/${image}`, // Store the image path in the database (relative to the public folder)
        })
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({ message: "failed to create blog", details: error.message })
    }
})

blogRouter.get("/", getAllBlogs)

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
blogRouter.get("/:id", getBlogBydId)

// update blog by id
blogRouter.patch("/:id", updateBlogById)

// delete blog by id
blogRouter.delete("/:id", deleteBlogById)

// filtering blog by category

module.exports = blogRouter