const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers.authorization;
  const jwtSecret = process.env.JWT_SECRET;

  if (!token)
    return res.status(401).json({
      success: false,
      message: "Authorization token is not supplied!",
    });

  if (token && token.startsWith("Bearer ")) token = token.split(" ")[1];

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err)
      return res.status(401).json({
        success: false,
        message: "Authorization token is not valid!",
      });
    req.user = decoded;
    return next();
  });
};

module.exports = { verifyToken };
