const mongoose = require("mongoose");
const expertAdviceSchema = new mongoose.Schema(
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
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [120, "length should be minimum 120 characters"],
      maxlength: [
        160,
        "The length of the title should be maximu 160 characters",
      ],
    },
    body: {
      type: String,
      required: [true, "Body is required"],
      minlength: [300, "length should be minimum 300 characters"],
      maxlength: [
        3000,
        "The length of the title should be maximum 3000 characters",
      ],
    },
  },
  { timestamps: true }
);

const ExpertAdvice = mongoose.model("ExpertAdvice", expertAdviceSchema);
module.exports = ExpertAdvice;

/* 
- how should the maximum length, and minimu length of the title, body, description be for the blog
*/
