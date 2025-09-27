const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Load environment variables
require("dotenv").config();

const adminEmail = process.env.ADMIN_EMAIL;
const adminPass = process.env.ADMIN_PASS;

// POST /api/contact
router.post("/", async (req, res) => {
  const { user_name, user_email, message } = req.body;

  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: adminEmail,
        pass: adminPass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Jobsta Contact" <${user_email}>`,
      to: adminEmail,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from Jobsta Contact Form</h2>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

module.exports = router;