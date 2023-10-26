
const jwt = require('jsonwebtoken');

 function checkrole(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // eslint-disable-next-line no-undef
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded.user.isAdmin) {
      req.user = decoded.user;
      next();
    } else {
      return res.status(403).json({ msg: 'Access denied, not an admin' });
    }
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

module.exports = checkrole;

  