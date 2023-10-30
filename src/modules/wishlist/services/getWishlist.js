const Wishlist = require('../model');
const Product = require('../../product/model');

async function getWishlist(req, res) {
  try {
    const { userId } = req.body;
    const wishlistItem = await Wishlist.find({ userId });

    if (!wishlistItem) {
      return res.status(404).send({ message: '0 item in wishlist' });
    }
    const allWishlistItems = [];
    for (const item of wishlistItem[0].items) {
      try {
        // Find products based on the item's _id and push them to the result array
        const products = await Product.find({ _id: item.product });
        allWishlistItems.push(products);
      } catch (error) {
        console.error(error);
        // Handle any errors that may occur during the database query
      }
    }

    return res.status(200).send({
      code: 200,
      message: 'fetched wishlist',
      wishlist: allWishlistItems,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = getWishlist;
