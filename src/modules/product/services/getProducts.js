const productModel = require('../model');



async function getProducts(req, res) {
  // const token = req.headers['x-access-token']
  try {

    // eslint-disable-next-line no-undef
    // const decoded = jwt.verify(token,process.env.SECRET_KEY)
    // if(!decoded) {
    //   res.send({ code: 400, message: 'auth failed' });
    // }
    const allProducts = await productModel.find();
    return res
      .status(200)
      .send({ code: 200, message: 'product fetchded', products: allProducts });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: 'error fetching the product' });
  }
}

module.exports = getProducts;
