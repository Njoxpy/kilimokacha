const express = require("express");
const path = require("path");
const multer = require("multer");

const router = express.Router();
// controllers
const {
  createAdvice,
  getAllAdvices,
  getAdviceById,
  deleteAdviceById,
  updateAdviceById,
} = require("../controllers/expertAdvice.controller");

// middleware
const validateAdviceCreate = require("../middleware/validateAdviceCreate");
const upload = require("../middleware/uploadImage");
const validateObjectId = require("../middleware/validateObjectId");

// models
const ExpertAdvice = require("../models/expertAdviceModel");
// Multer setup for image upload

// add expert advice
router.post("/", upload.single("image"), async (req, res) => {
  const { title, description, body } = req.body;
  const thumbnail_image = req.file ? req.file.filename : null; // The image file name from Multer

  if (!title || !description || !body) {
    return res.json({ message: "all required fields must be filled" });
  }

  if (title.length < 40 || title.length > 60) {
    return res.json({
      message: "title length should be between 40 and 60 characters",
    });
  }

  if (description.length < 120 || description.length > 160) {
    return res.json({
      message: "description length should be between 120 and 160 characters",
    });
  }

  if (body.length < 300 || body.length > 3000) {
    return res.status(400).json({
      message: "body length should be between 300 and 3000 characters",
    });
  }
  try {
    const blog = await ExpertAdvice.create({
      title,
      image: `/uploads/${thumbnail_image}`,
      description,
      body,
    });
    res.status(200).json(blog);
  } catch (error) {
    res
      .status(400)
      .json({ message: "failed to create blog", details: error.message });
  }
});

// get all advices
router.get("/", getAllAdvices);

// get advice by id
router.get("/:id", validateObjectId, getAdviceById);

// delete advice by id
router.delete("/:id", validateObjectId, deleteAdviceById);

// update advice by id
router.patch("/:id", validateObjectId, updateAdviceById);

module.exports = router;
