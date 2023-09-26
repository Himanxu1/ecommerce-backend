const express = require('express');
const router = express.Router();

const addcart = require('./services/addCart');
const removecart = require('./services/removeCart');
const getCartItems = require('./services/getCart');

// add product to cart
router.post('/add', async (req, res) => {
  await addcart(req, res);
});

// remove from cart
router.post('/remove', async (req, res) => {
  await removecart(req, res);
});

// get cart items
router.get('/', async (req, res) => {
  await getCartItems(req, res);
});

module.exports = router;
