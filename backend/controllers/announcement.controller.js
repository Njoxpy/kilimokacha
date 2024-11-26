const mongoose = require("mongoose")
const Announcement = require("../models/announcementModel")

// get all announcements
const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find()
        if (!announcements) {
            return res.json({ message: "not found" })
        }
        if (announcements.length === 0) {
            return res.json({ message: "no announcements for now" })
        }
        res.status(200).json(announcements)
    } catch (error) {
        res.status(400).json({ message: "failed to fetch announcements", details: error })
    }
}

// get announcement by id
const getAnnouncementById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ message: "no such announcement found" })
    }
    try {
        const announcement = await Announcement.findOne(id)
        res.status(200).json(announcement)
    } catch (error) {
        res.status(400).json({ message: "failed to fetch announcement", details: error })
    }
}

// create announcement
const createAnnouncement = async (req, res) => {
    const { title, body } = req.body

    if (!title || !body) {
        res.json({ message: "fill all required fields" })
    }
    try {
        const announcements = await Announcement.create({ title, body })
        res.status(200).json(announcements)

    } catch (error) {
        res.status(400).json({ message: "failed to add announcement" })
    }
}


module.exports = {
    getAllAnnouncements,
    createAnnouncement,
    getAnnouncementById
}