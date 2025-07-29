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
  try {
    res.cookie("Token", token);
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

Router.post('/login',async(req,res)=>{
   const {username , password} = req.body
   const user = await userModel.findOne({
          username
   })
if(!user){
  return res.status(404).json({
        message: "Username is Invalid",
      });
}

   if(user.password !== password){
return res.status(401).json({
        message: "Password is Invalid",
      });
   }


   const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
   res.cookie("Token",token,{})
   res.status(200).json({
  message: "Login successful",
  user,
});

})

module.exports = Router;
