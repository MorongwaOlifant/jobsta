const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  whatsappNumber: String,
  location: String,
  jobInterest: String,
  availability: String,
  qualification: String,
  fieldOfStudy: String,
  experience: String,
  skills: [String],
  language: String,
  engagementHistory: {
    type: [String],
    default: [],
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);