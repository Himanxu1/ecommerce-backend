const mongoose = require('mongoose');

const cartModel = new mongoose.Schema({
  userId: { type: String, required: true }, // User associated with the cart
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
      quantity: { type: Number, default: 1 },
    },
  ],
});

module.exports = mongoose.model('Cart', cartModel);
