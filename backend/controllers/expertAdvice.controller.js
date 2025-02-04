const mongoose = require("mongoose");
const Advice = require("../models/expertAdviceModel");
const Announcement = require("../models/announcementModel");
const ExpertAdvice = require("../models/expertAdviceModel");
const { OK, NOT_FOUND } = require("../constants/responseCode");
const {
  FAILED_GET,
  ADVICE_NOT_FOUND,
  NO_ADVICE,
  FAILED_TO_GET,
  DELETED_SUCESSFULLY,
  FAILED_TO_DELETE,
} = require("../constants/statusText");

// get all advices
const getAllAdvices = async (req, res) => {
  try {
    const advices = await Advice.find({}).sort({ createdAt: -1 });
    if (advices.length === 0) {
      res.json({ message: NO_ADVICE });
    }
    res.status(OK).json(advices);
  } catch (error) {
    res.status(NOT_FOUND).json({ message: FAILED_GET, error: error.message });
  }
};

// get advice by an id
const getAdviceById = async (req, res) => {
  const { id } = req.params;

  try {
    const advice = await Advice.findOne({ _id: id });
    if (!advice) {
      res.json({ message: ADVICE_NOT_FOUND });
    }
    res.status(OK).json(advice);
  } catch (error) {
    res
      .status(NOT_FOUND)
      .json({ message: FAILED_TO_GET, error: error.message });
  }
};

// delete advice by id
const deleteAdviceById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAdvice = await ExpertAdvice.findOneAndDelete({ _id: id });
    if (!deletedAdvice) {
      return res.status(NOT_FOUND).json({ message: ADVICE_NOT_FOUND });
    }
    res
      .status(OK)
      .json({ message: DELETED_SUCESSFULLY, details: deletedAdvice });
  } catch (error) {
    res
      .status(NOT_FOUND)
      .json({ message: FAILED_TO_DELETE, error: error.message });
  }
};

// update advice by id
const updateAdviceById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedAdvice = await ExpertAdvice.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    if (!updatedAdvice) {
      return res.status(NOT_FOUND).json({ message: "advice not found" });
    }
    res
      .status(OK)
      .json({ message: `update sucessfully`, details: updatedAdvice });
  } catch (error) {
    res
      .status(NOT_FOUND)
      .json({ message: "failed to update advice", error: error.message });
  }
};

module.exports = {
  getAllAdvices,
  getAdviceById,
  deleteAdviceById,
  updateAdviceById,
};
