const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://127.0.0.1:8080', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the locations data
app.get('/api/locations', (req, res) => {
  const locationsData = fs.readFileSync(path.join(__dirname, 'data', 'locations.json'), 'utf8');
  res.json(JSON.parse(locationsData));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});