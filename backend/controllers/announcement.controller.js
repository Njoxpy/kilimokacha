const Announcement = require("../models/announcementModel");
const { OK, NOT_FOUND, SERVER_ERROR } = require("../constants/responseCode");

// get all announcements
const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find({}).sort({ createdAt: -1 });

    if (announcements.length === 0) {
      return res.json({ message: "No announcements for now" });
    }
    res.status(OK).json(announcements);
  } catch (error) {
    res
      .status(NOT_FOUND)
      .json({ message: "failed to fetch announcements", error: error.message });
  }
};

// get announcement by id
const getAnnouncementById = async (req, res) => {
  const { id } = req.params;

  try {
    const announcement = await Announcement.findOne({ _id: id });
    res.status(OK).json(announcement);
  } catch (error) {
    res
      .status(NOT_FOUND)
      .json({ message: "failed to fetch announcement", error: error.message });
  }
};

// create announcement
const createAnnouncement = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    res.json({ message: "fill all required fields" });
  }

  if (title.length < 40 || title.length > 60) {
    return res.status(400).json({
      message: "title length should be between 40 and 60 characters",
    });
  }

  if (body.length < 300 || body.length > 3000) {
    return res.status(400).json({
      message: "body length should be between 300 and 3000 characters",
    });
  }

  // console.log(title.length);

  // const author = req.user.id && req.user;
  try {
    const announcements = await Announcement.create({ title, body });
    res.status(OK).json(announcements);
  } catch (error) {
    res
      .status(NOT_FOUND)
      .json({ message: "failed to add announcement", error: error.message });
  }
};

// update announcement by id
const updateAnnouncementBydId = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedAnnouncement = await Announcement.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    if (!updatedAnnouncement) {
      return res.status(NOT_FOUND).json({ message: "announcement not found" });
    }
    res.status(OK).json({ message: "update sucessfully", updatedAnnouncement });
  } catch (error) {
    res
      .status(SERVER_ERROR)
      .json({ message: "failed to update announcement", error: error.message });
  }
};

// delete announcement by id
const deleteAnnouncementById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAnnouncement = await Announcement.findOneAndDelete({
      _id: id,
    });
    if (!deletedAnnouncement) {
      res.status(NOT_FOUND).json({ message: "not found" });
    }
    res.status(OK).json({
      message: "announcement deleted sucessfully}",
      deletedAnnouncement,
    });
  } catch (error) {
    res
      .status(NOT_FOUND)
      .json({ message: "failed to update announcement", error: error.message });
  }
};

module.exports = {
  getAllAnnouncements,
  createAnnouncement,
  getAnnouncementById,
  updateAnnouncementBydId,
  deleteAnnouncementById,
};
