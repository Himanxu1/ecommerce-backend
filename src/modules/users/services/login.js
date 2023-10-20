const User = require('../model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
   // eslint-disable-next-line no-undef
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
   

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    res.status(200).json({ token, userid:user._id,name:user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = login;
