const express = require('express');
const router = express.Router();

const loginUser = require('./services/login');
const signupUser = require('./services/signup');

// login user
router.post('/login', async (req, res) => {
  await loginUser(req, res);
});

// sign up user
router.post('/signup', async (req, res) => {
  await signupUser(req, res);
});

module.exports = router;
