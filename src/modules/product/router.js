const express = require('express');
const router = express.Router();

const getAllProduct = require('./services/getProducts');
const saveProduct = require('./services/saveProduct');
const getbyid = require('../product/services/getById');
const deleteProduct = require('../product/services/deleteProduct');

// get commented ideas
router.get('/get-all', async (req, res) => {
  await getAllProduct(req, res);
});

// add product
router.post('/save', async (req, res) => {
  await saveProduct(req, res);
});

//  get by id
router.get('/', async (req, res) => {
  await getbyid(req, res);
});

//   delete by id
router.delete('/', async (req, res) => {
  await deleteProduct(req, res);
});

module.exports = router;
