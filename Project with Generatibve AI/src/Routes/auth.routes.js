const express = require("express");
const Router = express.Router();
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

Router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username,
    password,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("Token", token);
  try {
    res.status(201).json({
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

module.exports = Router;
