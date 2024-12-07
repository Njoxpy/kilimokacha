const express = require("express")
const multer = require("multer")
const { createAdvice, getAllAdvices, getAdviceById, deleteAdviceById, updateAdviceById } = require("../controllers/expertAdvice.controller")
const validateAdviceCreate = require("../middleware/validateAdviceCreate")
const ExpertAdvice = require("../models/expertAdviceModel")
const router = express.Router()

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// add expert advice
router.post("/new", validateAdviceCreate, router.post("/new", upload.single("image"), async (req, res) => {
    const { title, image, description, author } = req.body
    const thumbnail_image = req.file ? req.file.filename : null; // The image file name from Multer

    if (!title || !image || !description || !author) {
        return res.json({ message: "all required fields must be filled" })
    }
    try {
        const blog = await ExpertAdvice.create({
            title, image, description: `/uploads/${thumbnail_image}`,
        })
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({ message: "failed to create blog", details: error.message })
    }
}))

// get all advices
router.get("/", getAllAdvices)

// get advice by id
router.get("/:id", getAdviceById)

// delete advice by id
router.delete("/:id", deleteAdviceById)

// update advice by id
router.patch("/:id", updateAdviceById)

module.exports = router