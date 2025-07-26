const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connect to Data Base")
    })
     .catch((err) => {
        console.error('MongoDB connection failed:', err);
    })
}

module.exports = connectToDb