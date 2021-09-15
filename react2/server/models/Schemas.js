const mongoose = require('mongoose');

const itemSchema = {
  title: String,
  description: String,
}

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;