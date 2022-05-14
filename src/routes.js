const express = require("express");
const userRoutes = require("./user/routes");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Hewwo ^_^" });
});

routes.use("/users", userRoutes);

routes.use((_, res) => {
  res.status(404).json({
    success: false,
    message: "Resource not found! ",
  });
});

module.exports = routes;
