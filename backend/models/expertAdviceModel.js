const mongoose = require("mongoose");
const expertAdviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: [20, "The length og the title should be maximu 20 characters"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
});

const ExpertAdvice = mongoose.model("ExpertAdvice", expertAdviceSchema);
module.exports = ExpertAdvice;

/* 
- how should the maximum length, and minimu length of the title, body, description be for the blog
*/
