// server/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('✅ Backend server is running!');
});

// API route for barbershop info
app.get('/api/barbershop', (req, res) => {
  res.json({
    name: "Fama Barber Shop and Beauty Salon",
    rating: 4.6,
    address: "500 N Bell Ave #109, Denton, TX 76209, United States",
    phone: "+1 940-612-9127",
    status: "Open",
    closingTime: "Closes 7 pm",
    reviewCount: 116
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
