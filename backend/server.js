require('dotenv').config()
const path = require("path")
const express = require('express')
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// static
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

const marketRoutes = require("./routes/market.routes")
const blogRoutes = require("./routes/blog.routes")
const announcementRoutes = require("./routes/announcement.routes")
const expertAdviceRoutes = require("./routes/advice.routes")
const userRoutes = require("./routes/user.routes")
const connectDB = require('./config/DB')


app.use("/api/v1/market", marketRoutes)
app.use("/api/v1/blogs", blogRoutes)
app.use("/api/v1/announcements", announcementRoutes)
app.use("/api/v1/expert-advices", expertAdviceRoutes)
app.use("/api/v1/users", userRoutes)

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// subscribe

// contact

// connect to mongoDB
connectDB()

app.listen(process.env.PORT, () => {
    console.log(`listening on port: http://localhost:${process.env.PORT}`)
})