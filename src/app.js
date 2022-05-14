const express = require("express");
const cors = require("cors");
const routes = require("./routes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

if (process.env.NODE_ENV)
  app.listen(3000, () => {
    console.log("🚀");
  });

module.exports = app;
