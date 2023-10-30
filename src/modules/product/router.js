const express = require('express');
const router = express.Router();
const checkrole = require('../../middleware/checkrole');
const getAllProduct = require('./services/getProducts');
const saveProduct = require('./services/saveProduct');
const getbyid = require('../product/services/getById');
const deleteProduct = require('../product/services/deleteProduct');
const authenticate = require('../../middleware/authenticate');
const editRoute = require('../product/services/editProduct');

// get commented ideas
router.get('/get-all', authenticate, async (req, res) => {
  await getAllProduct(req, res);
});

// add product
router.post('/save', authenticate, async (req, res) => {
  await saveProduct(req, res);
});

//  get by id
router.get('/', authenticate,async (req, res) => {
  await getbyid(req, res);
});

//   delete by id
router.delete('/', checkrole('admin'), async (req, res) => {
  await deleteProduct(req, res);
});

// edit product by id
router.put('/', authenticate ,checkrole('admin'), async (req, res) => {
  await editRoute(req, res);
});

module.exports = router;
