const express = require("express")
const { getAllCrops, getCropById, createCrop } = require("../controllers/market.controller")
const { validateCrop } = require("../middleware/validateCrop")
const router = express.Router()

// all
router.get("/", (req, res) => {
    res.json({ message: "market trends" })
})
// get all crops
router.get("/crops", getAllCrops)

// get crop by id
router.get("/crops/:id", getCropById)

// create new product
router.post("/crops", validateCrop, createCrop)

// update product

// delete product by id

module.exports = router