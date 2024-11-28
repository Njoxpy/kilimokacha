const mongoose = require("mongoose")
const expertAdviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        }
    }
)

const ExpertAdvice = mongoose.model("ExpertAdvice", expertAdviceSchema)
module.exports = ExpertAdvice