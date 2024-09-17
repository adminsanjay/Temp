const mongoose = require('mongoose');

// Define the schema for events
const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
});

// Create and export the model
module.exports = mongoose.model('Event', eventSchema);
