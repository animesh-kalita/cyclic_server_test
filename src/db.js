const mongoose = require('mongoose');
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;