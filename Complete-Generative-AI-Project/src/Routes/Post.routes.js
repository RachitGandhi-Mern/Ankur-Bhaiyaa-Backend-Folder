const express = require("express");
const Router = express.Router();
const {authMiddleware} = require('../Middlewares/authMiddleware')
const {createPostController} = require('../Controllers/createPostController')
const multer = require('multer');
const uploade = multer({storage:multer.memoryStorage()})


Router.post("/", 
    authMiddleware ,
    uploade.single('image'),
    createPostController);
module.exports = Router;

