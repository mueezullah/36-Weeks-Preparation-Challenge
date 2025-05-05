const express = require("express");
const app = express();
const port = 3000;

// Loading middleware(not data) into the app using app.use()
app.use(express.json()); // Built-in JSON body parser

// custom middlewares - Logging, Auth, Validation
// Logging Middleware
const loggingMiddleware = function (req, res, next) {
  console.log("Logging...");
  next();
};
app.use(loggingMiddleware);

// Auth Middleware
const authMiddleware = function (req, res, next) {
  console.log("Authentication...");
  next();
};
app.use(authMiddleware);

// Validation Middleware
const validationMiddleware = function (req, res, next) {
  console.log("Validation...");
  next();
};
app.use(validationMiddleware);

app.get("/", (req, res) => {
  console.log(req.body); // parsed JSON
  res.send("Data Received");
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
