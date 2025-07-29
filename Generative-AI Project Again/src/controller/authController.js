const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt')

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User Already Exists" });
    }
    const user = await User.create({ username, password:await bcrypt.hash(password,10) });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production"
    });
    res.status(201).json({
      message: "User Registered Successfully",
      user
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.login = async (req, res) => {
    try {
        const{username , password} = req.body
        const user = await User.findOne({
            username
        })

        if(!user){
            res.status(400).json({message :"User not found"})
        }
        const ispassword = await bcrypt.compare(password , user.password)
        if(!ispassword){
            res.status(400).json({message :"Invalid Password"})
        }
        const Token = jwt.sign({id:user._id} , process.env.JWT_SECRET)
        res.cookie("token", Token)

        res.status(200).json({
            Message:"User Loggedin Successfully",
            user
        })
    } catch (error) {
        res.status(401).json({
            Message:"Invalid Credientials"
        })
    }
  
};