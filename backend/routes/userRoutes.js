const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { sendConfirmationEmail } = require("../utils/mailer");

// @route   POST /api/users
// @desc    Create a new jobseeker entry
// @access  Public
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    //Send confirmation email to the user
    await sendConfirmationEmail(req.body.user_email, req.body.name);

    res.status(201).json({
      message: "User saved and confirmation email sent",
      user: newUser,
    });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;