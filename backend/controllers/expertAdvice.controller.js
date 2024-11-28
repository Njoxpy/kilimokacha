const mongoose = require("mongoose")
const Announcement = require("../models/expertAdviceModel")


// create advice
const createAdvice = async (req, res) => {
    const { title, image, description } = req.body

    if (!title || !image || !description) {
        return res.json({ message: "fill all required fields" })
    }

    try {
        const advice = await Announcement.create({ title, image, description })
        res.status(200).json(advice)
    } catch (error) {
        res.status(404).json({ message: "failed to create", details: error })
    }

}

// get all advices
const getAllAdvices = async (req, res) => {
    try {
        const advices = await Announcement.find()
        if (advices.length === 0) {
            res.json({ message: "no advices for now" })
        }
        res.status(200).json(advices)
    } catch (error) {
        res.status(404).json({ message: "failed to fetch", details: error })
    }
}

// get advice by an id
const getAdviceById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid) {
        return res.status(404).json({ message: "no such advice" })
    }
}
module.exports = {
    createAdvice,
    getAllAdvices
}