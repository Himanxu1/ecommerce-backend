const Wishlist = require('../model');
const Product = require('../../product/model');

async function removeFromWishlist(req, res) {
  try {
    const { userId, productId } = req.body;

    // Find the user's wishlist
    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ error: 'Wishlist not found' });
    }

    // Find the product by productId
    const product = await Product.findOne({ productId });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Find the index of the product in the wishlist's items
    const index = wishlist.items.findIndex((item) =>
      item.product.equals(product._id),
    );

    // If the product is in the wishlist, remove it
    if (index !== -1) {
      wishlist.items.splice(index, 1);
    } else {
      return res
        .status(404)
        .json({ error: 'Product not found in the wishlist' });
    }

    // Save the updated wishlist
    await wishlist.save();

    res.status(200).json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = removeFromWishlist;
