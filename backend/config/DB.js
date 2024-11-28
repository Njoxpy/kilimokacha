const mongoose = require("mongoose")
const express = require('express')
const app = express()

const connectDB = () => mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        console.log("connected to Db");
    })
    .catch((error) => {
        console.error(`failed to connect: ${error}`)
    })

module.exports = connectDB