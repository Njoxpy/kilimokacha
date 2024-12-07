const express = require("express")
const { getAllCrops, getCropById, createCrop, updateCropBydId, deleteCropById } = require("../controllers/market.controller")
const { validateCrop } = require("../middleware/validateCrop")
const router = express.Router()

// get all crops
router.get("/", getAllCrops)

// get crop by id
router.get("/:id", getCropById)

// create new product
router.post("/new", validateCrop, createCrop)

// update product
router.patch("/:id", updateCropBydId)

// delete product by id
router.delete("/:id", deleteCropById)

// implement functionality for users to search by and filter(name, loaction ,supply status)

module.exports = router