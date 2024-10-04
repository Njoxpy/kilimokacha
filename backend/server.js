require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const homepageRoutes = require("./routes/homepage/homepageRoutes")
const userRoutes = require("./routes/user/userRoutes")
const blogRoutes = require("./routes/blog/blogRoutes")

app.use("/api/v1", homepageRoutes)
app.use("api/v1/users/", userRoutes)
app.use("/api/v1/blog", blogRoutes)

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/", (req, res) => {
    res.json("hello from kilimokacha homepage API")
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening on port: http://localhost:${process.env.PORT}`)
})