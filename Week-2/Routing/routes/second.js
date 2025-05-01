const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("second file's home page");
});

router.post("/about", (req, res) => {
  res.send("About second file");
});

module.exports = router;
