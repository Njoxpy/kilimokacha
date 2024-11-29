const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema

const userSchema = Schema(
    {
        email: {
            type: String,
            required: true,
            unque: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

// static signup method
userSchema.statics.signup = async function (email, password) {
    const exists = await this.findOne({
        email
    })
    if (exists) {
        throw new Error("Email alredy in use");
    }

    const salt = bcrypt.genSalt(12)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })
    return user
}

module.exports = mongoose.model("User", userSchema)