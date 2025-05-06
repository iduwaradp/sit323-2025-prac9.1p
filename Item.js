const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String
});

module.exports = mongoose.model('Item', itemSchema);
