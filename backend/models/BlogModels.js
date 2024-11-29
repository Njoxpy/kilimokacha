const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true,
        },
        thumbnail_image: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            default: "farming tips"
        }
    },
    { timestamps: true }
)

const Blog = mongoose.model("Blogs", blogSchema)
module.exports = Blog