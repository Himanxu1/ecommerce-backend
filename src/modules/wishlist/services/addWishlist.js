const Wishlist = require('../model');
const Product = require('../../product/model');

// Add a product to the wishlist
async function addToWishlist(req, res) {
  try {
    const { userId, productid } = req.body;

    // Find the product by productId
    const product = await Product.findOne({ productid });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Find the user's wishlist
    let wishlist = await Wishlist.findOne({ userId });

    // If the user doesn't have a wishlist, create one
    if (!wishlist) {
      wishlist = new Wishlist({ userId, items: [] });
    }

    // Check if the product is already in the wishlist
    const wishlistItem = wishlist.items.find((item) =>
      item.product.equals(product._id),
    );

    // If the product is in the wishlist, send the error
    if (wishlistItem) {
      return res.status(404).json({ error: 'Product is already in wishlist' });
    } else {
      // Otherwise, add a new item to the wishlist
      wishlist.items.push({ product: product._id });
    }

    // Save the wishlist
    await wishlist.save();

    res.status(201).json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = addToWishlist;
