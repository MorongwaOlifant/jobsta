const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Message model
const Message = mongoose.model("Message", new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
}));

// POST /api/messages
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message received successfully!" });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;