const productModel = require('../model');

async function editProduct(req, res) {
  try {
    console.log(req.body)
    const { name, price, description,img } = req.body
    const productid = req.query.id;
    console.log(name,price,description)
    const updatedProduct = await productModel.findByIdAndUpdate(
        productid,
        { name, price, description,img },
        { new: true } // Return the updated product
    );
    if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
    }
    return res
      .status(200)
      .send({ code: 200, message: 'product updated', product:updatedProduct });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: 'error getting the product' });
  }
}

module.exports = editProduct;
