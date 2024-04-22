const express = require('express');
const connectDB = require('./src/db');
const tourRoutes = require('./src/Routes/tourRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/tours', tourRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Adventure Tours API");
});
// Start server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start listening for requests
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process if unable to connect to the database
  }
};

// Call the function to start the server after database connection
startServer();