require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
const contactRoutes = require("./routes/contactRoutes");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config(); // Load .env file

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/messages", messageRoutes);
app.use("/api/contact", contactRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Jobsta backend is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});