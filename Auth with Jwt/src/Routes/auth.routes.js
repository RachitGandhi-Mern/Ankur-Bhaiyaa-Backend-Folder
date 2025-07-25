const express = require('express')
const Router = express.Router()
const userModel = require('../models/user.model')


Router.post('/register',async (req, res)=>{
    const {username , password} = req.body

    const newUser = await userModel.create({
        username, password
    })
     res.status(201).json({
        message:"User Created Successfully",
        newUser
     })

})


Router.post("/login",async (req, res)=>{
    const {username , password} = req.body
    const existingUser = await userModel.findOne({
        username :username
    })
if (!existingUser) {
    return res.status(401).json({ message: "Username already exists" });
}
else{
    res.status(201).json({
        message:"Loggin Successfully"
    })
}
const isPassword = password == existingUser.password
if(!isPassword){
     return res.status(401).json({ message: "Invalid Password" });
}
else{
    res.status(201).json({
        message:"Loggin Successfully"
    })
}
})


module.exports = Router