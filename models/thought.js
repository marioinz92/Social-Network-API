const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;

const express = require('express');
const router = express.Router();
const Thought = require('../models/thought');

// Post a new thought
router.post('/', async (req, res) => {
  try {
    const { text, author } = req.body;

    // Create a new thought
    const newThought = new Thought({ text, author });

    // Save the thought to the database
    await newThought.save();

    res.status(201).json({ message: 'Thought posted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

