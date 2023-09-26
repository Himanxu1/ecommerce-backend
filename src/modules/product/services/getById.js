const productModel = require('../model');

async function getProductById(req, res) {
  try {
    const product = await productModel.find({ productid: req.query.id });
    return res
      .status(200)
      .send({ code: 200, message: 'product fetched', product: product });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: 'error getting the product' });
  }
}

module.exports = getProductById;
