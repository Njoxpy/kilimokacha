require('dotenv').config()
const path = require("path")
const express = require('express')
const cors = require("cors")
const moragn = require("morgan")
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
const subscribeRoutes = require("./routes/subscribe.routes")
const connectDB = require('./config/DB')
const morgan = require('morgan')


app.use("/api/v1/crops", marketRoutes)
app.use("/api/v1/blogs", blogRoutes)
app.use("/api/v1/announcements", announcementRoutes)
app.use("/api/v1/expert-advices", expertAdviceRoutes)
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/subscribe", subscribeRoutes)

// middleware
app.use(morgan("dev"))

// subscribe

// contact

// connect to mongoDB
connectDB()

app.listen(process.env.PORT, () => {
    console.log(`listening on port: http://localhost:${process.env.PORT}`)
})