const mongoose = require('mongoose')

function ConnectToDB (){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('Connect To Data Base')
    })
    .catch(error=>{
        console.log(error.message)
    })
}

module.exports = ConnectToDB