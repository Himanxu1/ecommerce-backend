const orderModel = require('../model');

async function addOrder(req, res) {
  try {
    const createOrder = await orderModel({
      productid: req.body.productid,
      userid: req.body.userid,
    });

    const newOrder = await createOrder.save();
    return res
      .status(200)
      .send({ code: 200, message: 'order added', product: newOrder });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: 'error adding the order' });
  }
}

module.exports = addOrder;
