const express = require("express")
const homeRouter = express.Router()

// chatbot

// announcement

//  GET: Get the list of announcements available: http://localhost:5000/api/v1/announcement/
homeRouter.get("/announcement/", (req, res) => {
    res.json("get the list of announcements available into the website")
})

// GET: Get an announcement by an id: http://localhost:5000/api/v1/announcement/12
homeRouter.get("/announcement/:id", (req, res) => {
    res.json("get announcement by an id.")
})

// POST: add new announcement: http://localhost:5000/api/v1/announcement/
homeRouter.post("/announcement/", (req, res) => {
    res.json("add new announcement into the page")
})

// DELETE: removes announcement by id: http://localhost:5000/api/v1/announcement/12
homeRouter.delete("/announcement/:id", (req, res) => {
    res.json("removes an announcement by an id")
})

// PUT: updates an announcement by id: http://localhost:5000/api/v1/announcement/12
homeRouter.put("/announcement/:id", (req, res) => {
    res.json("updates an announcement by an id")
})


// market info

// weather data

// expert advice

// GET: get the list of advices available: http://localhost:5000/api/v1/expert-advice/
homeRouter.get("/expert-advice", (req, res) => {
    res.json("get the list of advices available")
})

// GET: get the advices by an id: http://localhost:5000/api/v1/expert-advice/12
homeRouter.get("/expert-advice/:id", (req, res) => {
    res.json("get the advice by an id")
})

// POST: add new expert-advice: http://localhost:5000/api/v1/expert-advice/
homeRouter.post("/expert-advice/", (req, res) => {
    res.json("add new expert-advice into the page")
})

// DELETE: remove expert-advice by id: http://localhost:5000/api/v1/expert-advice/12
homeRouter.delete("/expert-advice/:id", (req, res) => {
    res.json("removes and advice by an id")
})

// PUT: updates expert-advice by id: http://localhost:5000/api/v1/expert-advice/12
homeRouter.put("/expert-advice/:id", (req, res) => {
    res.json("updates an advice by an id")
})

// about 

// contact
homeRouter.post("/contact", (req, res) => {
    res.json("send message into the page")
})

// terms and conditions

// privacy policy

// subscribe
homeRouter.post("/subscribe", (req, res) => {
    res.json('subscribing into the email list')
})

homeRouter.get("/search", (req, res) => {
    res.json("searching for ....")
})
module.exports = homeRouter;
