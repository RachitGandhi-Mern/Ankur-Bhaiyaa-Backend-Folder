const express = require("express");
const Router = express.Router();
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

Router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const newUser = await userModel.create({
    username,
    password,
  });
  const token = jwt.sign(
    {
      id: newUser._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("Token" , token)
  res.status(201).json({
    message: "User Created Successfully",
    newUser,
  });
});




Router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await userModel.findOne({
    username: username,
  });
  if (!existingUser) {
    return res.status(401).json({ message: "Username already exists" });
  } else {
    res.status(201).json({
      message: "Loggin Successfully",
    });
  }
  const isPassword = password == existingUser.password;
  if (!isPassword) {
    return res.status(401).json({ message: "Invalid Password" });
  } else {
    res.status(201).json({
      message: "Loggin Successfully",
    });
  }
});

Router.get("/User", (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(401)
      .json({
        message: "Unautharized",
      })
      .select("-password  -_v")
      .lean();



    /* 
todo What is .lean()?
.lean() converts the result of a Mongoose query into a plain JavaScript object, instead of a Mongoose Document.

! Why use .lean()?
todo Feature Benefit
✅ Faster	Skips creating Mongoose Document = better performance
✅ Lightweight	Returns plain object, not heavy document
✅ API Friendly	Easy to send as JSON in responses
❌ No .save() etc.	You can’t modify or save the result directly

Don’t use .lean() when:
	•	You want to modify/save the result
	•	You need schema methods or virtual fields
? Correct Usage Example:
const user = await User.findById(id)
  .select("-password -__v") // remove fields
  .lean();                  // plain object

res.json(user);             // ready for API

* Incorrect Usage (Your Code):
return res.status(401).json({
   message:"Unauthorized"
}).select().lean(); // ❌ Wrong - this is not a query

.select() and .lean() work on query, not on res.json().

🔚 One-liner Summary:
Use .lean() when you only want raw, fast data without Mongoose magic.
 */


  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await.userModel.findOne({
      _id: decoded.id,
    });
    res.status(200).json({
      message: "User data fetched Successfully",
      user,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
});

module.exports = Router;
