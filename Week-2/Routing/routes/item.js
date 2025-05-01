// This file will store all items to specific routes

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET Request Received");
});

router.post("/items", (req, res) => {
  res.send("POST Request Received");
});

router.put("/about", (req, res) => {
  res.send("PUT Request Received");
});

router.delete("/other", (req, res) => {
  res.send("DELETE Request Received");
});

module.exports = router;
