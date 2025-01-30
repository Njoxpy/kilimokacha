const express = require("express");
const {
  getAllAnnouncements,
  createAnnouncement,
  updateAnnouncementBydId,
  getAnnouncementById,
  deleteAnnouncementById,
} = require("../controllers/announcement.controller");
const validateObjectId = require("../middleware/validateObjectId");
const router = express.Router();

// get all announcement
router.get("/", getAllAnnouncements);

// get announcement by id
router.get("/:id", validateObjectId, getAnnouncementById);

// create announcement
router.post("/", createAnnouncement);

// update announcement
router.patch("/:id", validateObjectId, updateAnnouncementBydId);

// delete announcement by id
router.delete("/:id", validateObjectId, deleteAnnouncementById);

module.exports = router;
