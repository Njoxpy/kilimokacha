// import express
const express = require("express")
const userRoutes = express.Router()


// home
userRoutes.get("/", (req, res) => {
    res.json("hello from users page")
})

// POST: Createaccount
userRoutes.post("/register", (req, res) => {
    res.json({ user: "register user" })
})

// POST: login
userRoutes.post("/login", (req, res) => {
    res.json({ user: "login user" })
})

// GET: get user by id
userRoutes.get("/:id", (req, res) => {
    res.json({ user: "get user by an id" })
})

// PUT: Update user profile
userRoutes.put("/:id", (req, res) => {
    res.json({ user: "update user by an id" })
})

// DELETE: delete user by an id
userRoutes.delete("/:id", (req, res) => {
    res.json({user: "delete user by an id"})
})


module.exports = userRoutes;