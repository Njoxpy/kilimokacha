// mongoose
const mongoose = require("mongoose")

// models
const Crops = require("../models/marketModel")
const { OK, NOT_FOUND } = require("../constants/responseCode")

// get all products
const getAllCrops = async (req, res) => {
    try {

        const crops = await Crops.find({}).sort({ createdAt: -1 })

        if (crops.length === 0) {
            return res.json({ message: "no crops for now" })
        }
        res.status(OK).json(crops)
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to fetch crops details", error: error.message })
    }
}

// get crop by id
const getCropById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(NOT_FOUND).json({ error: "No such crop found" })
    }
    try {
        const crop = await Crops.findOne({ _id: id })
        if (!crop) {
            return res.status(NOT_FOUND).json({ message: "product not found" })
        }
        res.status(OK).json(crop)
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to fetch product", error: error.message })
    }

}

// create product
const createCrop = async (req, res) => {
    const { crop, price, location, supplyStatus } = req.body

    try {
        const crops = await Crops.create({ crop, price, location, supplyStatus })
        res.status(OK).json(crops)
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to add crop", error: error.message })
    }
}

// update crop by id
const updateCropBydId = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(NOT_FOUND).json({ message: "crop not found" })
    }
    try {
        const updatedCrop = await Crops.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        if (!updatedCrop) {
            return res.status(NOT_FOUND).json({ message: "crop not found" })
        }
        res.status(OK).json({ message: "update sucessfully", updatedCrop })
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to update crop", error: error.message })
    }
}

// delete crop by id
const deleteCropById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(NOT_FOUND).json({ message: "crop not found" })
    }
    try {
        const deletedCrop = await Crops.findOneAndDelete({ _id: id })
        if (!deletedCrop) {
            return res.status(NOT_FOUND).json({ message: "failed to get the crop" })
        }
        res.status(OK).json({ message: "crop deleted sucessfully", deletedCrop })
    } catch (error) {
        res.status(NOT_FOUND).json({ message: "failed to delete crop", error: error.message })
    }
}
module.exports = {
    getAllCrops,
    getCropById,
    createCrop,
    updateCropBydId,
    deleteCropById
}