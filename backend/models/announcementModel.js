const mongoose = require("mongoose");
const announcementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The title for the announcement is required"],
      minlength: [
        20,
        "Minimum lenght for the announcement title should be 20 characters",
      ],
      maxlength: [
        30,
        "Minimum lenght for the announcement title should be 20 characters",
      ],
    },
    body: {
      type: String,
      required: [true, "Announcement information is required into the project"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      required: [true, "User is required to create announcement"],
      ref: "User",
    },
  },
  { timestamps: true }
);

const Announcement = mongoose.model("Announcement", announcementSchema);
module.exports = Announcement;
