const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
    type:String,
    required:true
    }
}, {timestamps:true})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel
