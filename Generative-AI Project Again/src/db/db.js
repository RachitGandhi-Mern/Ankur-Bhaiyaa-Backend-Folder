const mongoose = require('mongoose')


function ConnectToDB (){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected To DataBase")
    })
    .catch(error=>{
        console.log(error , error.message)
    })
}

module.exports = ConnectToDB