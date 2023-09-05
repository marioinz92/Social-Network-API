const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

const express = require('express');
const app = express();

// Import User and Thought models
const User = require('./models/user');
const Thought = require('./models/thought');

// Middleware for JSON parsing and other middleware as needed
app.use(express.json());

// Define routes here
const authRoutes = require('./routes/auth');
const thoughtRoutes = require('./routes/thought');

app.use('/auth', authRoutes);
app.use('/thoughts', thoughtRoutes);
// Example: Register a new user
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Add more routes for login, posting thoughts, reactions, and friend lists

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
