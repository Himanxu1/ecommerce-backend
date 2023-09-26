const Cart = require('../model');
const Product = require('../../product/model');

async function getCartItems(req, res) {
  try {
    const { userId } = req.body;
    const cartItems = await Cart.find({ userId });

    if (!cartItems) {
      res.status(404).send({ message: 'no product in cart' });
    }
    const allcartItems = [];
    for (const item of cartItems[0].items) {
      try {
        // Find products based on the item's _id and push them to the result array
        const products = await Product.find({ _id: item.product });
        allcartItems.push(products);
      } catch (error) {
        console.error(error);
        // Handle any errors that may occur during the database query
      }
    }

    res
      .status(200)
      .send({ code: 200, message: 'fetched cart items', cart: allcartItems });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Intenal server error' });
  }
}

module.exports = getCartItems;
