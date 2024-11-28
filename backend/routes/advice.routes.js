const express = require("express")
const { createAdvice, getAllAdvices, getAdviceById, deleteAdviceById } = require("../controllers/expertAdvice.controller")
const validateAdviceCreate = require("../middleware/validateAdviceCreate")
const router = express.Router()

// add expert advice
router.post("/", createAdvice)

// get all advices
router.get("/", getAllAdvices)

// get advice by id
router.get("/:id", getAdviceById)

// delete advice by id
router.delete("/:id", deleteAdviceById)

module.exports = router