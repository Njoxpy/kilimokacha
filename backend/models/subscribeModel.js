const mongoose = require("mongoose")

const subscribeSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        }
    },
    { timestamps: true }

)
const Subscriber = mongoose.model("Subscriber", subscribeSchema)
module.exports = Subscriber