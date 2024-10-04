const express = require("express")
const homeRouter = express.Router()

homeRouter.get("/", (req, res) => {
    res.json("hello from home routes homepage routes")
})

// chatbot

// announcement

// market info

// weather data

// expert advice

// about 

// contact

// terms and conditions

// privacy policy

// profile management(register, login,delete)

// POST: Createaccount
homeRouter.post("/users/register", (req, res) => {
    res.json({ user: "register user" })
})

// POST: login
homeRouter.post("/users/login", (req, res) => {
    res.json({ user: "login user" })
})

// GET: get user by id
homeRouter.get("/users/:id", (req, res) => {
    res.json({ user: "get user by an id" })
})

// PUT: Update user profile
homeRouter.put("/users/:id", (req, res) => {
    res.json({ user: "update user by an id" })
})

// DELETE: delete user by an id
homeRouter.delete("/users/:id", (req, res) => {
    res.json({user: "delete user by an id"})
})

module.exports = homeRouter;