const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsModel = new Schema(
  {
    productid: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    subImg: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Products', productsModel);
