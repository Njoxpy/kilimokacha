const express = require("express")
const { createAdvice, getAllAdvices, getAdviceById, deleteAdviceById, updateAdviceById } = require("../controllers/expertAdvice.controller")
const validateAdviceCreate = require("../middleware/validateAdviceCreate")
const router = express.Router()

// add expert advice
router.post("/new", validateAdviceCreate, createAdvice)

// get all advices
router.get("/", getAllAdvices)

// get advice by id
router.get("/:id", getAdviceById)

// delete advice by id
router.delete("/:id", deleteAdviceById)

// update advice by id
router.patch("/:id", updateAdviceById)

module.exports = router