const express = require("express")
const { getAllAnnouncements, createAnnouncement } = require("../controllers/announcement.controller")
const router = express.Router()

router.get("/", getAllAnnouncements)
router.post("/", createAnnouncement)

module.exports = router