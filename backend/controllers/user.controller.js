const jwt = require("jsonwebtoken");

// sttaus code
const {
  OK,
  SERVER_ERROR,
  NO_CONTENT,
  NOT_FOUND,
} = require("../constants/responseCode");

// models
const User = require("../models/userModel");
const Subscriber = require("../models/subscribeModel");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);
    res.status(OK).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    const token = createToken(user._id);
    res.status(OK).json({ email, token });
  } catch (error) {
    res.status(SERVER_ERROR).json({ error: error.message });
  }
};

// create: user
// read: user
const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    if (users.length === 0) {
      return res
        .status(NO_CONTENT)
        .json({ message: "There is no user for now" });
    }
    res.status(OK).json(users);
  } catch (error) {
    res.status(SERVER_ERROR).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = User.findOne({ _id: id });
    if (!user) {
      return res.status(NOT_FOUND).json({ message: "User not found" });
    }

    res.status(OK).json(user);
  } catch (error) {
    res.status(SERVER_ERROR).json({ error: error.message });
  }
};
// update user
const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(NOT_FOUND).json({ message: "User not found" });
    }
    // when updating check if the user with another email has email which a user wants to update

    res.status(OK).json(updatedUser);
  } catch (error) {
    res.status(SERVER_ERROR).json({ error: error.message });
  }
};
// delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findOneAndDelete({ _id: id });
    if (!deletedUser) {
      return res.status(NOT_FOUND).json({ message: "user not found" });
    }

    res.status(OK).json({ message: "Deleted sucessfully", deletedUser });
  } catch (error) {
    res.status(SERVER_ERROR).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
