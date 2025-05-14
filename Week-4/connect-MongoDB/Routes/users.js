const express = require("express");
const router = express.Router();

const User = require("../Models/userModel");

//routes

// CRUD operations

// View / Read

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// create

router.post("/users", async (req, res) => {
  try {
    const { name, age } = req.body;
    const newUser = new User({ name, age });
    await newUser.save();
    res.status(200).send({
      success: true,
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Update

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, age });
    if (!updatedUser) {
      res.json({
        message: "User Not Found",
      });
    }
    // if you have successfully updated the user
    res.send(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// delete

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      res.json({
        message: "User Not Found",
      });
    }
    // if user found and deleted successfully
    res.status(200).json({
      success: true,
      user: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
