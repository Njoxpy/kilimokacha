const mongoose = require("mongoose")

const Schema= mongoose.Schema

const userSchema = Schema(
    {
        username: {
            type: String,
            required: true,
            unque: true
        }
    }
)
