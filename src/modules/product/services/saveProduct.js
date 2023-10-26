const productsModel = require('../model');
const { v4: uuidv4 } = require('uuid');

async function saveProduct(req, res) {
  try {
    const product = new productsModel({
      productid: uuidv4(),
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      img: req.body.img,
      subImg: req.body.subImg,
    });
    const newProduct = await product.save();
    return res.status(200).send({ code: 200, message: 'product added',product:newProduct });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: 'error adding the product' });
  }
}

module.exports = saveProduct;
