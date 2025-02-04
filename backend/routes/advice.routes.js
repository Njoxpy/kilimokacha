const express = require("express");

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
const validateAdviceCreate = require("../middleware/validators/validateCreateAdvice");
const upload = require("../middleware/uploadImage");
const validateObjectId = require("../middleware/validateObjectId");

// models
const ExpertAdvice = require("../models/expertAdviceModel");
// Multer setup for image upload

// add expert advice
router.post(
  "/",

  upload.single("image"),
  validateAdviceCreate,
  async (req, res) => {
    const { title, description, body } = req.body;
    const thumbnail_image = req.file ? req.file.filename : null;

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
  }
);

// get all advices
router.get("/", getAllAdvices);

// get advice by id
router.get("/:id", validateObjectId, getAdviceById);

// delete advice by id
router.delete("/:id", validateObjectId, deleteAdviceById);

// update advice by id
router.patch("/:id", validateObjectId, updateAdviceById);

module.exports = router;
