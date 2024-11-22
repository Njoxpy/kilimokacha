require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

const marketRoutes = require("./routes/market.routes")


app.use("/api/v1/market", marketRoutes)

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`listening on port: http://localhost:${process.env.PORT} && connected to DB`)
        })
    })
    .catch((error) => {
        console.error(`failed to connect: ${error}`)
    })

