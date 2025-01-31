const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: [40, "length should be minimum 40 characters"],
      maxlength: [
        60,
        "The length of the title should be maximum 60 characters",
      ],
    },
    body: {
      type: String,
      required: [true, "Blog body is required"],
      minlength: [300, "length should be minimum 300 characters"],
      maxlength: [
        3000,
        "The length of the title should be maximum 3000 characters",
      ],
    },
    image: {
      type: String,
      required: [true, "please provide image about the blog"],
    },
    /*
    author: {
      type: String,
      required: [true, "User is required"],
      ref: "User",
    },
     */
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
