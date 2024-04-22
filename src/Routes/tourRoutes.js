// src/tourRoutes.js
const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// Route to get all tours
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new tour
router.post('/', async (req, res) => {
  const tourData = req.body;
  try {
    const tour = new Tour(tourData);
    await tour.save();
    res.status(201).json(tour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
