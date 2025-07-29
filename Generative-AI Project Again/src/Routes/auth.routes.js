const express = require("express");
const Router = express.Router();
const { signup } = require("../controller/authController");

Router.post("/register", signup);

module.exports = Router;
