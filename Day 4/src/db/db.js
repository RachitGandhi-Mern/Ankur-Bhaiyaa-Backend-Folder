const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect('mongodb+srv://rachitgandhipy:0uVE8MlkC0eEBxzy@cluster0.okbpqsv.mongodb.net/SheryiansCohort')
    .then(()=>{
        console.log("Connect to Data Base")
    })
}

module.exports = connectToDB