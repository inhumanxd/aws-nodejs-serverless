const express = require("express");
const { verifyToken } = require("../middlewares/auth");
const signToken = require("../utils/sign-token");

const routes = express.Router({
  mergeParams: true,
});

routes.post("/login", (req, res) => {
  const token = signToken(req.body);
  res.status(200).json({
    success: true,
    message: "User signup successful.",
    token,
  });
});

routes.get("/", verifyToken, (req, res) => {
  res.status(200).json({ message: "Hewwo users ^_^" });
});

module.exports = routes;
