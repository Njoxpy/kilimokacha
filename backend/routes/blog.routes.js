const express = require('express')
const { getAllBlogs, createBlog, getBlogBydId, updateBlogById, deleteBlogById } = require('../controllers/blog.controller')

const blogRouter = express.Router()

// GET: get blogs
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

// POST: add blog
blogRouter.post("/new", createBlog)

// get blog by id
blogRouter.get("/:id", getBlogBydId)

// update blog by id
blogRouter.patch("/:id", updateBlogById)

// delete blog by id
blogRouter.delete("/:id", deleteBlogById)

// filtering blog by category

module.exports = blogRouter