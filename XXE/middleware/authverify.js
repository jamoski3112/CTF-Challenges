const jwt = require('jsonwebtoken');
require('dotenv').config()
module.exports = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.query.access_token, process.env.JWT_TOKEN);
    console.log(decoded)
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(400).json({
      message: "auth failed,you have to be authenticated"
    })
  }
};
