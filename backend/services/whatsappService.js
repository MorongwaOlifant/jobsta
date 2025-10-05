// services/whatsappService.js
const mongoose = require('mongoose');
const User = require('../models/User');

const waitForConnection = () => {
  return new Promise((resolve) => {
    if (mongoose.connection.readyState === 1) {
      resolve();
    } else {
      console.log('Waiting for DB connection...');
      const checkConnection = setInterval(() => {
        if (mongoose.connection.readyState === 1) {
          clearInterval(checkConnection);
          console.log('DB connection ready');
          resolve();
        }
      }, 1000);
    }
  });
};

const userSessions = {};

const questions = [
  "✅ Welcome to Jobsta! Let’s build your job profile. What’s your *name & surname)*?",
  "📞 What’s your WhatsApp number? (e.g. +27612345678)",
  "� What’s your *location*? (e.g. Cape Town)",
  "💼 What type of *job* are you interested in? (e.g. Software Development Intership)",
  "⏳ What’s your *availability*? (e.g. Immediate, 1 week)",
  "🎓 What’s your *highest qualification*?",
  "📚 What’s your *field of study*? (e.g. IT, HR, Marketing)",
  "👩‍💻 How many years of *experience* do you have?",
  "🛠 What *skills* do you have? (comma separated)",
  "🗣 What is your *preferred language*?",
  "✅ Done! Thanks for registering. You’ll now start receiving job alerts weekly 🙌"
];

const fields = [
  "name",
  "whatsappNumber",
  "location",
  "jobInterest",
  "availability",
  "qualification",
  "fieldOfStudy",
  "experience",
  "skills",
  "language"
];

const handleUserMessage = async (userId, message) => {
  // First-time user
  if (!userSessions[userId]) {
    userSessions[userId] = {
      step: 0,
      data: {}
    };
    return questions[0];
  }

  const session = userSessions[userId];
  const step = session.step;

  if (step < fields.length) {
    const field = fields[step];

    if (field === 'whatsappNumber' && !message.startsWith('+27')) {
      return "Please enter a valid SA WhatsApp number starting with +27 (e.g. +27612345678).";
    }

    if (field === 'skills') {
      session.data[field] = message.split(',').map(skill => skill.trim()); // Convert to array
    } else {
      session.data[field] = message.trim();
    }

    session.step++;

    // If that was the last question, save to MongoDB
    if (session.step === fields.length) {
      console.log('Attempting to save user, readyState:', mongoose.connection.readyState);
      try {
        await waitForConnection();
        console.log('Saving user data...');
        await User.create({
          ...session.data,
          engagementHistory: [`Registered via WhatsApp on ${new Date().toLocaleDateString()}`]
        });

        console.log("✅ New user saved:", session.data);
      } catch (error) {
        console.error("❌ Failed to save user:", error);
        return "⚠️ Oops! Something went wrong saving your profile. Please try again later.";
      }
    }

    return questions[session.step]; // Next question or final message
  }

  return "🟢 You’re already registered. Reply *restart* to start again.";
};

module.exports = { handleUserMessage };