const orderModel = require('../model');
const productModel = require('../../product/model');
const userModel = require('../../users/model');

async function getOrders(req, res) {
  try {
    const allOrder = await orderModel.find();
    let ordersWithDetails = [];
    for (let i = 0; i < allOrder.length; i++) {
      const order = allOrder[i];
      const productIds = order.productid; 

      const products = await productModel.find({
        productid: { $in: productIds } 
      });

      const user = await userModel.findOne({ _id: order.userid });

      const orderWithDetails = {
        user: user,
        products: products
      };
      ordersWithDetails.push(orderWithDetails);
    }

    return res
      .status(200)
      .send({ code: 200, message: 'orders fetchded', orders: ordersWithDetails });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: 'error fetching the product' });
  }
}

module.exports = getOrders;
