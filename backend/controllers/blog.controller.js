const mongoose = require("mongoose")
const Blog = require("../models/BlogModels")

// get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        if (blogs.length === 0) {
            return res.json({ message: "There no blogs for now" })
        }
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({ message: "failed to get product details", message: error })
    }
}

// get blog by id

// get blogs by category

// create blog
const createBlog = async (req, res) => {
    const { title, body, author, category, thumbnail_image } = req.body

    if (!title || !body || !author || !category || !thumbnail_image) {
        return res.json({ message: "all required fields must be filled" })
    }
    try {
        const blog = await Blog.create({ title, body, author, category, thumbnail_image })
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({ message: "failed to create blog", details: error.message })
    }
}

module.exports = {
    getAllBlogs,
    createBlog
}