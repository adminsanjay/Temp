const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
try {
const events = await Event.find();
res.json(events);
} catch (err) {
res.status(500).json({ message: err.message });
}
});

// Get a single event by ID
router.get('/:id', async (req, res) => {
try {
const event = await Event.findById(req.params.id);
if (!event) return res.status(404).json({ message: 'Event not found' });
res.json(event);
} catch (err) {
res.status(500).json({ message: err.message });
}
});

// Create a new event
router.post('/', async (req, res) => {
const event = new Event({
name: req.body.name,
date: req.body.date,
location: req.body.location,
description: req.body.description,
});

try {
const newEvent = await event.save();
res.status(201).json(newEvent);
} catch (err) {
res.status(400).json({ message: err.message });
}
});

module.exports = router;