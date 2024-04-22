const express = require('express');
const connectDB = require('./src/db');
require("dotenv").config();
const cors = require('cors'); // Import the CORS middleware
const Tour = require('./src/models/Tour');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Use CORS middleware to allow all origins

// Routes
app.get('/', (req, res) => {
  res.send('Adventure Tours API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});