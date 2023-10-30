const express = require('express');
const router = express.Router();

const saveorder = require('./services/order');
const successOrder = require('./services/orderSuccess');

// get commented ideas
router.post('/order',async (req, res) => {
  await saveorder(req, res);
});

//order success
router.post('/success', async (req, res) => {
  await successOrder(req, res);
});

module.exports = router;
