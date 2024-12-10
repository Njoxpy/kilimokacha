const express = require('express')
const { subscribe } = require('../controllers/subscribe.controller')

const router = express.Router()

router.post("/", subscribe)

module.exports = router