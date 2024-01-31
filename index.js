// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse JSON bodies for POST requests
app.use(bodyParser.json());

// GET route
app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!');
});

// POST route
app.post('/', (req, res) => {
  const data = req.body;
  res.json({ message: 'POST request received', data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
