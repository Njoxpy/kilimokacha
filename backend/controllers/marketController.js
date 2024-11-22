// mongoose
const mongoose = require("mongoose")

// models
const Crops = require("../models/marketModel")

// get all products
const getAllCrops = async (req, res) => {
    try {

        const crops = await Crops.find()

        if (crops.length === 0) {
            return res.json({ message: "no crops for now" })
        }
        res.status(200).json(crops)
    } catch (error) {
        res.status(500).json({ message: "failed to fetch crops details", details: error })
    }
}

const getCropById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "invalid ID" })
    }
    try {
        const crop = await Crops.findByOne(id)
        if (!crop) {
            return res.status(400).json({ message: "product not found" })
        }
        res.status(200).json(crop)
    } catch (error) {
        res.status(500).json({ message: "failed to fetch product", details: error })
    }

}

// create product
const createCrop = async (req, res) => {
    const { crop, price, location, supplyStatus } = req.body

    try {
        const crops = await Crops.create({ crop, price, location, supplyStatus })
        res.status(200).json(crops)
    } catch (error) {
        res.status(500).json({ message: "failed to add crop", details: error })
    }
}

module.exports = {
    getAllCrops,
    getCropById,
    createCrop
}