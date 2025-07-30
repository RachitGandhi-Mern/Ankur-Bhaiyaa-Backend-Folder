const mongoose = require('mongoose')


function ConnectTODB (){
    mongoose.connect(process.env.MONDODB_URI)
    .then(()=>{
        console.log('Connect To Data Base')
    })
    .catch(error=>{
        console.log(
            error , error.message
        )
    })
}

module.exports = ConnectTODB