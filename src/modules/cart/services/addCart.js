const Cart = require('../model');
const Product = require('../../product/model');

// Add a product to the cart
async function addTocart(req, res) {
  try {
    const { userId, productid, quantity } = req.body;

    // Find the product by productId
    const product = await Product.findOne({ productid });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Find the user's cart
    let cart = await Cart.findOne({ userId });

    // If the user doesn't have a cart, create one
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product is already in the cart
    const cartItem = cart.items.find((item) =>
      item.product.equals(product._id),
    );

    // If the product is in the cart, update the quantity
    if (cartItem) {
      cartItem.quantity += quantity || 1;
    } else {
      // Otherwise, add a new item to the cart
      cart.items.push({ product: product._id, quantity: quantity || 1 });
    }

    // Save the cart
    await cart.save();

    res.status(201).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = addTocart;
