const awsServerlessExpress = require("aws-serverless-express");
const app = require("./src/app");

const server = awsServerlessExpress.createServer(app);
const handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
};

exports.handler = handler;
