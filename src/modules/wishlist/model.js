const mongoose = require('mongoose');

const wishlistModel = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    },
  ],
});

module.exports = mongoose.model('Wishlist', wishlistModel);
