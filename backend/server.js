const express = require('express');
const session = require('express-session');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();


const app = express();

// Connect to the database
connectDB();

// Middleware setup
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_default_secret_key', 
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }, 
}));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Training Institute!');
});

// Route handlers
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/course', require('./routes/courseRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
