const User = require('../model');

// Sign-up endpoint
async function signup(req, res) {
  try {
    const { username, password,email,role } = req.body;

    if(email == 'admin@gmail.com' && password == 'admin@123'){
      const adminCreate = new User({username,password,email,role})
      await adminCreate.save();
     return res.status(201).json({ adminCreate });
    }

    // Check if the username is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user
    const newUser = new User({ username, password,email });

    // Save the user to the database
    await newUser.save();
    const sucess = 'sign up sucess';
    res.status(201).json({ sucess });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = signup;
