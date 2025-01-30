const express = require("express");
const router = express.Router();

// model
const {
  subscribe,
  getAllSubscribers,
  getSubscriber,
  updateSubscriber,
  removeSubscriber,
} = require("../controllers/subscribe.controller");

// middleware
const validateObjectId = require("../middleware/validateObjectId");

router.post("/", subscribe);

// get subscribers
router.get("/", getAllSubscribers);

// get subscriber
router.get("/:id", validateObjectId, getSubscriber);

// update subscriber
router.patch("/:id", validateObjectId, updateSubscriber);

// delete subscriber
router.delete("/:id", validateObjectId, removeSubscriber);

module.exports = router;
