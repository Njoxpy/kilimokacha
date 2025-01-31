const mongoose = require("mongoose");
const marketSchema = new mongoose.Schema(
  {
    crop: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    location: {
      type: String,
      required: true,
    },
    supplyStatus: {
      type: String,
      required: true,
      enum: ["low-stock", "instock", "out-of-stock"],
      default: "in-stock",
    },
  },
  { timestamps: true }
);

const Market = mongoose.model("Crops", marketSchema);

module.exports = Market;
