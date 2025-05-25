const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Get token from headers or cookies
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  // If token is in cookies instead
  // const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No Token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid Token' });
  }
};

module.exports = verifyToken;
