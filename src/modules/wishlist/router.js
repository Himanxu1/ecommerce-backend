const express = require('express');
const router = express.Router();
const addWishlist = require('./services/addWishlist');
const removeWishlist = require('./services/removeWishlist');
const getWishlist = require('../wishlist/services/getWishlist');

// add product to cart
router.post('/add', async (req, res) => {
  await addWishlist(req, res);
});

// remove from cart
router.post('/remove', async (req, res) => {
  await removeWishlist(req, res);
});

//  get wishlist items
router.get('/', async (req, res) => {
  await getWishlist(req, res);
});

module.exports = router;
