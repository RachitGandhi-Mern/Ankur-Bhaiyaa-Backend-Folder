const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected To Data Base")
    }).catch((error)=>{
        console.log(error , error.message)
    })
}

module.exports = connectToDB 
