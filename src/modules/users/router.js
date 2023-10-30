const express = require('express');
const router = express.Router();

const loginUser = require('./services/login');
const signupUser = require('./services/signup');
const getAllUsers = require('./services/getUsers');
const authenticate = require('../../middleware/authenticate');
const checkRole = require('../../middleware/checkrole');

// login user
router.post('/login', async (req, res) => {
  await loginUser(req, res);
});

// sign up user
router.post('/signup', async (req, res) => {
  await signupUser(req, res);
});

// get all users
router.get('/get-all', authenticate,checkRole('admin') ,async (req, res) => {
  await getAllUsers(req, res);
});

module.exports = router;
