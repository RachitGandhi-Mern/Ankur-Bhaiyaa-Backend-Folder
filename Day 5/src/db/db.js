const mongoose = require('mongoose')


function connectToDb(){
    mongoose.connect('mongodb+srv://rachitgandhipy:0uVE8MlkC0eEBxzy@cluster0.okbpqsv.mongodb.net/SheryiansCohort')
    .then(()=>{
        console.log("Connect to Database")
    })
}

module.exports = connectToDb