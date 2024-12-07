const mongoose = require("mongoose")
const Advice = require("../models/expertAdviceModel")
const Announcement = require("../models/announcementModel")
const ExpertAdvice = require("../models/expertAdviceModel")
const { OK, NOT_FOUND } = require("../constants/responseCode")


// get all advices
const getAllAdvices = async (req, res) => {
    try {
        const advices = await Advice.find({}).sort({ createdAt: -1 })
        if (advices.length === 0) {
            res.json({ message: "no advices for now" })
        }
        res.status(OK).json(advices)
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to fetch", error: error.message })
    }
}

// get advice by an id
const getAdviceById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(NOT_FOUND).json({ message: "no such advice" })
    }
    try {
        const advice = await Advice.findOne({ _id: id })
        if (!advice) {
            res.json({ message: "advice not found" })
        }
        res.status(OK).json(advice)
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to get advice", error: error.message })
    }
}

// delete advice by id
const deleteAdviceById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(NOT_FOUND).json({ message: "advice not found" })
    }
    try {
        const deletedAdvice = await Announcement.findOneAndDelete(id)
        if (!deletedAdvice) {
            return res.status(NOT_FOUND).json({ message: "advice not found" })
        }
        res.status(OK).json({ message: "advice deleted sucessfully", details: deletedAdvice })
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to delete", error: error.message })
    }
}

// update advice by id
const updateAdviceById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(NOT_FOUND).json({ message: "advice with that id not found" })
    }
    try {
        const updatedAdvice = await ExpertAdvice.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        if (!updatedAdvice) {
            return res.status(NOT_FOUND).json({ message: "advice not found" })
        }
        res.status(OK).json({ message: `update sucessfully`, details: updatedAdvice })
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to update advice", error: error.message })
    }
}

module.exports = {
    getAllAdvices,
    getAdviceById,
    deleteAdviceById,
    updateAdviceById
}