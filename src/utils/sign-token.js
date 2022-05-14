const jwt = require("jsonwebtoken");

const signToken = ({ id }) => {
  const jwtSecret = process.env.JWT_SECRET;
  const token = jwt.sign({ id, iat: Date.now() }, jwtSecret);
  return token;
};

module.exports = signToken;
