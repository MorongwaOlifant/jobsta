const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('MONGO_URI:', process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      bufferTimeoutMS: 30000, // Increase buffer timeout
    });
    console.log('MongoDB connected successfully');
    console.log('readyState:', mongoose.connection.readyState);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    // Do not exit, so server starts and we can see the error
  }
};

// Connection event listeners
mongoose.connection.on('connected', () => console.log('Mongoose connected to DB'));
mongoose.connection.on('error', (err) => console.error('Mongoose connection error:', err));
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

module.exports = connectDB;