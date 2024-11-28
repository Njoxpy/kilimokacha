const express = require("express")
const { createAdvice, getAllAdvices } = require("../controllers/expertAdvice.controller")
const validateAdviceCreate = require("../middleware/validateAdviceCreate")
const router = express.Router()

// add expert advice
router.post("/", createAdvice)

// get all advices
router.get("/", getAllAdvices)

module.exports = router