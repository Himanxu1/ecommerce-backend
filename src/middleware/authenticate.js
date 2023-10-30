const jwt = require('jsonwebtoken');
const User = require('../modules/users/model');

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization');

    // eslint-disable-next-line no-undef
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({ _id: verifyToken.user.id });
    if (!rootUser) {
      throw new Error('User not Found');
    }
    req.token = token;
    req.rootUser = rootUser;

    next();
  } catch (err) {
    res.status(400).send('Unauthorized: No token provided');
    console.log(err);
  }
};

module.exports = authenticate;
