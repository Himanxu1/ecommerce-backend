const express = require('express');
const router = express.Router();


const getOrder = require('./services/getOrder');
const addOrder = require('./services/addOrder');
const authenticate = require('../../middleware/authenticate');
const checkRole = require('../../middleware/checkrole');

// add Orders
router.post('/add', authenticate,async (req, res) => {
  await addOrder(req, res);
});

//order fetched
router.get('/get-all',authenticate,checkRole('admin'), async (req, res) => {
  await getOrder(req, res);
});

module.exports = router;
