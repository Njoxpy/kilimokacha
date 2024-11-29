const mongoose = require("mongoose")
const Advice = require("../models/expertAdviceModel")
const Announcement = require("../models/announcementModel")


// create advice
const createAdvice = async (req, res) => {
    const { title, image, description } = req.body

    if (!title || !image || !description) {
        return res.json({ message: "fill all required fields" })
    }

    try {
        const advice = await Advice.create({ title, image, description })
        res.status(200).json(advice)
    } catch (error) {
        res.status(404).json({ message: "failed to create", details: error })
    }

}

// get all advices
const getAllAdvices = async (req, res) => {
    try {
        const advices = await Advice.find()
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
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "no such advice" })
    }
    try {
        const advice = await Advice.findById({ _id: id })
        if (!advice) {
            res.json({ message: "advice not found" })
        }
        res.status(200).json(advice)
    } catch (error) {
        res.status(404).json({ message: "failed to get advice", details: error })
    }
}

// delete advice by id
const deleteAdviceById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "advice not found" })
    }
    try {
        const deletedAdvice = await Announcement.findOneAndDelete(id)
        if (!deletedAdvice) {
            return res.status(404).json({ message: "advice not found" })
        }
        res.status(200).json({ message: "advice deleted sucessfully", details: deletedAdvice })
    } catch (error) {
        res.status(404).json({ message: "failed to delete" })
    }
}

// update advice by id
const updateAdviceById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "advice not found" })
    }
    try {
        const updatedAdviceById = await Announcement.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        if (!updatedAdviceById) {
            return res.status(404).json("failed to get advice")
        }
        res.status(200).json({ message: updateAdviceById })
    } catch (error) {
        res.status(404).json({ message: "failed to update" })
    }
}
module.exports = {
    createAdvice,
    getAllAdvices,
    getAdviceById,
    deleteAdviceById,
    updateAdviceById
}