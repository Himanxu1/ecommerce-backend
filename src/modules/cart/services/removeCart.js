const Cart = require('../model');
const Product = require('../../product/model');

// Add a product to the cart
async function removeFromCart(req, res) {
  try {
    const { userId, productId } = req.body;

    // Find the user's cart
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    // Find the product by productId
    const product = await Product.findOne({ productId });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Find the index of the product in the cart's items
    const index = cart.items.findIndex((item) =>
      item.product.equals(product._id),
    );

    // If the product is in the cart, remove it
    if (index !== -1) {
      cart.items.splice(index, 1);
    } else {
      return res.status(404).json({ error: 'Product not found in the cart' });
    }

    // Save the updated cart
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = removeFromCart;
