const express = require("express");
const userRoutes = express.Router();

// controllers
const {
  loginUser,
  signupUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

// middleware
const validateObjectId = require("../middleware/validateObjectId");

// login route
userRoutes.post("/login", loginUser);

// signup route
userRoutes.post("/signup", signupUser);

// get users
userRoutes.get("/", getUsers);

// get user
userRoutes.get("/:id", validateObjectId, getUser);

// update user
userRoutes.patch("/:id", validateObjectId, updateUser);

// delete user
userRoutes.delete(":id", validateObjectId, deleteUser);

module.exports = userRoutes;
