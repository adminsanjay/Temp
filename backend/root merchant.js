const express = require('express');
const router = express.Router();
const Merchandise = require('../models/Merchandise');

// Get all merchandise
router.get('/', async (req, res) => {
try {
const items = await Merchandise.find();
res.json(items);
} catch (err) {
res.status(500).json({ message: err.message });
}
});

// Get a single merchandise item by ID
router.get('/:id', async (req, res) => {
try {
const item = await Merchandise.findById(req.params.id);
if (!item) return res.status(404).json({ message: 'Item not found' });
res.json(item);
} catch (err) {
res.status(500).json({ message: err.message });
}
});

// Create a new merchandise item
router.post('/', async (req, res) => {
const item = new Merchandise({
name: req.body.name,
description: req.body.description,
price: req.body.price,
image: req.body.image,
});

try {
const newItem = await item.save();
res.status(201).json(newItem);
} catch (err) {
res.status(400).json({ message: err.message });
}
});

module.exports = router;