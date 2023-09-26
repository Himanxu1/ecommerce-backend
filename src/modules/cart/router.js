const express = require('express');
const router = express.Router();

const addcart = require('./services/addCart');
const removecart = require('./services/removeCart');

// add product to cart
router.post('/add', async (req, res) => {
  await addcart(req, res);
});

// remove from cart
router.post('/remove', async (req, res) => {
  await removecart(req, res);
});

module.exports = router;
