const mongoose = require("mongoose");
const announcementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The title for the announcement is required"],
      minlength: [40, "length should be minimum 40 characters"],
      maxlength: [
        60,
        "The length of the title should be maximum 60 characters",
      ],
    },
    body: {
      type: String,
      required: [true, "Announcement information is required"],
      minlength: [300, "length should be minimum 300 characters"],
      maxlength: [
        3000,
        "The length of the title should be maximum 3000 characters",
      ],
    },
    /*
    createdBy: {
      type: mongoose.Types.ObjectId,
      required: [true, "User is required to create announcement"],
      ref: "User",
    },
     */
  },
  { timestamps: true }
);

const Announcement = mongoose.model("Announcement", announcementSchema);
module.exports = Announcement;
