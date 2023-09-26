const productModel = require('../model');

async function deleteProduct(req, res) {
  try {
    const deletedProduct = await productModel.findOneAndDelete({
      productid: req.query.id,
    });
    return res.status(200).send({
      code: 200,
      message: 'deleted success',
      deletedProduct: deletedProduct,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: 'error deleting the product' });
  }
}

module.exports = deleteProduct;
