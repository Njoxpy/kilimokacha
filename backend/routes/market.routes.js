const express = require("express")
const { getAllCrops, getCropById, createCrop, updateCropBydId, deleteCropById } = require("../controllers/market.controller")
const { validateCrop } = require("../middleware/validateCrop")
const router = express.Router()

// get all crops
router.get("/crops", getAllCrops)

// get crop by id
router.get("/crops/:id", getCropById)

// create new product
router.post("/crops/new", validateCrop, createCrop)

// update product
router.patch("/crops/:id", updateCropBydId)

// delete product by id
router.delete("/crops/:id", deleteCropById)

module.exports = router