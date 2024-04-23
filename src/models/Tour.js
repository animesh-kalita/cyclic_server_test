const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  startDate: { type: Number, required: true }, 
  endDate: { type: Number, required: true }, 
  image: { type: String, required: true },
  availableSpots: { type: Number, required: true },
  difficultyLevel: { type: String, required: true },
  meetingPoint: { type: String, required: true },
  inclusions: { type: [String], required: true },
  exclusions: { type: [String], required: true },
  requirements: { type: [String], required: true },
  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
