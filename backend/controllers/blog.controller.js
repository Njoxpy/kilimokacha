const mongoose = require("mongoose")
const Blog = require("../models/BlogModels")

// get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({}).sort({ createdAt: -1 })
        if (blogs.length === 0) {
            return res.json({ message: "There no blogs for now" })
        }
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({ message: "failed to get product details", error: error.message })
    }
}

// get blog by id
const getBlogBydId = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ message: "blog not found" })
    }
    try {
        const blog = await Blog.findById({ _id: id })
        if (!blog) {
            return res.json({ mesage: "could not get blog with that details" })
        }
        res.status(200).json(blog)
    } catch (error) {
        res.status(404).json({ message: "could not fetch blog", error: error.message })
    }
}

// update blog by id
const updateBlogById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ message: "blog not found" })
    }
    try {
        const updatedBlog = await Blog.findOneAndUpdate({ _id: id }, {
            ...req.body
        }, { new: true })
        if (!updatedBlog) {
            return res.status(404).json({ message: "could not get the blog with that id" })
        }
        res.status(200).json({ message: "updated sucessfully", updatedBlog })
    } catch (error) {
        res.status(404).json({ message: "could not update blog", error: error.message })
    }
}

// delete blog by id
const deleteBlogById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ message: "blog not found" })
    }
    try {
        const deletedBlog = await Blog.findOneAndDelete({ _id: id })
        if (!deletedBlog) {
            return res.status(404).json({ message: "could not get the blog" })
        }
        res.status(200).json({ message: "deleted sucessfully", deletedBlog })
    } catch (error) {
        res.status(404).json({ message: "could not update blog", error: error.message })
    }
}



module.exports = {
    getAllBlogs,
    getBlogBydId,
    updateBlogById,
    deleteBlogById
}