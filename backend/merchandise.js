const mongoose = require('mongoose');

// Define the schema for merchandise
const merchandiseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // URL or path to the image
});

// Create and export the model
module.exports = mongoose.model('Merchandise', merchandiseSchema);