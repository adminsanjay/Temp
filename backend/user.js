const mongoose = require('mongoose');

// Define the schema for users
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create and export the model
module.exports = mongoose.model('User', userSchema);
