const express = require("express")
const { getAllAnnouncements, createAnnouncement, updateAnnouncementBydId, getAnnouncementById, deleteAnnouncementById } = require("../controllers/announcement.controller")
const router = express.Router()

// get all announcement
router.get("/", getAllAnnouncements)
// get announcement by id
router.get("/:id", getAnnouncementById)
// create announcement
router.post("/new", createAnnouncement)
// update announcement
router.patch("/", updateAnnouncementBydId)
// delete announcement by id
router.delete("/:id", deleteAnnouncementById)

module.exports = router