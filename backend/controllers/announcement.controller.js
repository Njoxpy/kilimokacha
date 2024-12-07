const mongoose = require("mongoose")
const Announcement = require("../models/announcementModel")
const { OK, NOT_FOUND, SERVER_ERROR } = require("../constants/responseCode")

// get all announcements
const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find({}).sort({ createdAt: -1 })
        if (!announcements) {
            return res.json({ message: "not found" })
        }
        if (announcements.length === 0) {
            return res.json({ message: "no announcements for now" })
        }
        res.status(OK).json(announcements)
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to fetch announcements", error: error.message })
    }
}

// get announcement by id
const getAnnouncementById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ message: "no such announcement found" })
    }
    try {
        const announcement = await Announcement.findOne({ _id: id })
        res.status(OK).json(announcement)
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to fetch announcement", error: error.message })
    }
}

// create announcement
const createAnnouncement = async (req, res) => {
    const { title, body, author } = req.body

    if (!title || !body || !author) {
        res.json({ message: "fill all required fields" })
    }
    try {
        const announcements = await Announcement.create({ title, body, author })
        res.status(OK).json(announcements)

    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to add announcement", error: error.message })
    }
}

// update announcement by id
const updateAnnouncementBydId = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(NOT_FOUND).json({ message: "announcement with that id not found" })
    }
    try {
        const updatedAnnouncement = await Announcement.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        if (!updatedAnnouncement) {
            return res.status(NOT_FOUND).json({ message: "announcement not found" })
        }
        res.status(OK).json({ message: "update sucessfully", updatedAnnouncement })
    } catch (error) {
        res.status(SERVER_ERROR).json({ message: "failed to update announcement", error: error.message })
    }
}

// delete announcement by id
const deleteAnnouncementById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(NOT_FOUND).json({ message: 'we could not find the announcement with that id' })
    }
    try {
        const deletedAnnouncement = await Announcement.findOneAndDelete({ _id: id })
        if (!deletedAnnouncement) {
            res.status(NOT_FOUND).json({ message: "not found" })
        }
        res.status(OK).json({ message: "announcement deleted sucessfully}", deletedAnnouncement })
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to update announcement", error: error.message })
    }

}

module.exports = {
    getAllAnnouncements,
    createAnnouncement,
    getAnnouncementById,
    updateAnnouncementBydId,
    deleteAnnouncementById
}