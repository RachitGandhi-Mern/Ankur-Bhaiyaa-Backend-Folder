const jwt = require('jsonwebtoken');
const userModel = require('../Model/user.model');

exports.authMiddleware = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized. Please log in first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }
    req.user = user; 
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token. Please verify first",
      error: error.message,
    });
  }
};