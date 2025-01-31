const mongoose = require("mongoose");
const { NOT_FOUND } = require("../constants/responseCode");

const validateObjectId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(NOT_FOUND).json({ message: "Not found" });
  }

  next();
};

module.exports = validateObjectId;
