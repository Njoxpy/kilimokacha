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
            type: Object,
            required: false,
        },
        author: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)
