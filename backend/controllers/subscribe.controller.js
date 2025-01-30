const {
  NOT_FOUND,
  SERVER_ERROR,
  OK,
  BAD_REQUEST,
  NO_CONTENT,
  CREATED,
} = require("../constants/responseCode");
const validator = require("validator");
const Subscriber = require("../models/subscribeModel");

const subscribe = async (req, res) => {
  const { email } = req.body;

  // Check if email is provided
  if (!email) {
    return res.status(BAD_REQUEST).json({ message: "Email is required" });
  }

  if (!validator.isEmail(email)) {
    return res.status(BAD_REQUEST).json({ message: "Email is not valid" });
  }

  try {
    // Check for existing subscriber
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Email already subscribed" });
    }

    /* save subscriber if the the request is correct */
    // Save new subscriber
    const newSubscriber = await Subscriber.create({ email });

    res.status(CREATED).json(newSubscriber);
  } catch (error) {
    res
      .status(SERVER_ERROR)
      .json({ message: "Failed to subscribe", error: error.message });
  }
};

// get the list of subscribers
const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });

    if (subscribers.length === 0) {
      return res
        .status(NO_CONTENT)
        .json({ message: "There are no subscribers for now" });
    }

    res.status(OK).json(subscribers);
  } catch (error) {
    res.status(SERVER_ERROR).json({ error: error.message });
  }
};
// update
const updateSubscriber = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedEmail = await Subscriber.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    if (!updatedEmail) {
      return res.status(NOT_FOUND).json({ message: "User not found" });
    }

    const exists = await Subscriber.findOne(updatedEmail);

    if (exists) {
      return res.status(BAD_REQUEST).json({ message: "Email exists" });
    }

    res.status(OK).json({ "updated sucessfully": updatedEmail });
  } catch (error) {
    res.status(SERVER_ERROR).json({ error: error.message });
  }
};

// delete
const removeSubscriber = async (req, res) => {
  const { id } = req.params;
  try {
    const subscriber = await Subscriber.findOneAndDelete({ _id: id });

    if (!subscriber) {
      return res.status(NOT_FOUND).json({ message: "Subscriber not found" });
    }
    res.status(OK).json({ "deleted sucessfully": subscriber });
  } catch (error) {
    res.status(SERVER_ERROR).json({ error: error.message });
  }
};

// get single email
const getSubscriber = async (req, res) => {
  const { id } = req.params;
  try {
    const subscriber = await Subscriber.findOne({ _id: id });
    if (!subscriber) {
      return res.status(NOT_FOUND).json({ message: "Subscriber not found" });
    }

    res.status(OK).json(subscriber);
  } catch (error) {
    res.status(SERVER_ERROR).json({ error: error.message });
  }
};

module.exports = {
  subscribe,
  getAllSubscribers,
  getSubscriber,
  removeSubscriber,
  updateSubscriber,
};
