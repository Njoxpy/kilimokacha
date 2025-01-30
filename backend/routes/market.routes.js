const express = require("express");
const router = express.Router();

// controllers
const {
  getAllCrops,
  getCropById,
  createCrop,
  updateCropBydId,
  deleteCropById,
} = require("../controllers/market.controller");

// middlewares
const { validateCrop } = require("../middleware/validateCrop");
const validateObjectId = require("../middleware/validateObjectId");

// get all crops
router.get("/", getAllCrops);

// get crop by id
router.get("/:id", validateObjectId, getCropById);

// create new product
router.post("/", validateCrop, createCrop);

// update product
router.patch("/:id", validateObjectId, updateCropBydId);

// delete product by id
router.delete("/:id", validateObjectId, deleteCropById);

// implement functionality for users to search by and filter(name, loaction ,supply status)

module.exports = router;
