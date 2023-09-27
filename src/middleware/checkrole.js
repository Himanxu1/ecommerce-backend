

function checkRole(role) {
    return (req, res, next) => {
      if (req.user && req.user.role === role) {
        next(); // User has the required role; proceed to the route
      } else {
        res.status(403).json({ message: 'Access denied' }); // User does not have the required role
      }
    };
  }
  
  module.exports = checkRole;
  