const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      maxlenght: [
        20,
        "The length of the title should not exceed 20 characters",
      ],
    },
    body: {
      type: String,
      required: [true, "Blog body is required"],
    },
    thumbnail_image: {
      type: String,
      required: [true, "please provide image about the blog"],
    },
    author: {
      type: String,
      required: [true, "User is required"],
      ref: "User",
    },
    category: {
      type: String,
      required: true,
      enum: [
        "farming-tips",
        "market-trends",
        "sucess-stories",
        "sustainability",
      ],
      default: "farming tips",
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
