const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderModel = new Schema(
  {
    userid: { type: String, required: true },
    productid: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Order', orderModel);
