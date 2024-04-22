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
app.get("/",app.get("/", (req, res) => {
  res.send("Welcome to Adventure Tours API");
}))
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});