const User = require('../model');
const jwt = require('jsonwebtoken');

// Sign-up endpoint
async function signup(req, res) {
  try {
    const { username, password,role } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user
    const newUser = new User({ username, password,role });

    // Save the user to the database
    await newUser.save();

    // Create a JWT token for the user
    // eslint-disable-next-line no-undef
    const token = jwt.sign(
      { username: newUser.username },
      // eslint-disable-next-line no-undef
      process.env.SECRET_KEY,
    );
    const sucess = 'sign up sucess';
    res.status(201).json({ token, sucess });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = signup;
