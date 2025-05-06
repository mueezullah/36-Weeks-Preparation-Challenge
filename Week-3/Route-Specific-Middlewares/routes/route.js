const express = require("express");
const router = express.Router();

// middlewares
const authentication = function (req, res, next) {
  console.log("I am inside Authorization Middleware.");

  // adding dummy user
  req.user = { userId: 1, role: "admin" };

  if (req.user) {
    // if a valid user is there in req, then proceed to next middleware
    next();
  } else {
    // if not a valid user
    res.json({
      success: false,
      message: "Not a valid user",
    });
  }
};

const isStudent = function (req, res, next) {
  console.log("I am inside student's Middlware");

  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access Denied. This route is only for students",
    });
  }
};

const isAdmin = function (req, res, next) {
  console.log("I am inside Admin's Middleware");

  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access Denied. This route is only for Admins",
    });
  }
};

router.get("/student", authentication, isStudent, (req, res) => {
  console.log("I am inside Student route.");
  res.send("Student Specific Page");
});

router.get("/admin", authentication, isAdmin, (req, res) => {
  console.log("I am inside the admin route.");
  res.send("Admin specific Page");
});

module.exports = router;
