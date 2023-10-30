const jwt = require('jsonwebtoken');

const checkRole = (role) => {
  return (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Access denied' });
    }

    try {
      // eslint-disable-next-line no-undef
      const decoded = jwt.verify(token,process.env.SECRET_KEY);
      console.log(decoded)
      if (decoded.user.role !== role) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
};

module.exports = checkRole;