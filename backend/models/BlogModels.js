const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = Schema(
    {
        title: {
            type: String,
            required: true
        }
    }
)