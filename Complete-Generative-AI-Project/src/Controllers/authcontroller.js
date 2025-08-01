const userModel = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already Exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      username,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "User Registered Succesfully", newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try{
const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  if(!user){
    return res.status(400).json({message:"Invalid Username"})
  }
  const isPassword = await bcrypt.compare(password , user.password)
  if(!isPassword){
    return res.status(400).json({ message: "Invalid Password" })
  }
  const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
  res.cookie("token", token, { httpOnly: true })
  res.status(200).json({ message: "Login successful" ,user});
  }catch(error){
    res.status(500).json({ message: error.message });
  }
};
