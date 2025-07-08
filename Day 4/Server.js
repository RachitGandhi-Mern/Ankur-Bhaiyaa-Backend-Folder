const express = require('express')
const app = express()
app.use(express.json())
var morgan = require('morgan')
const connectToDB = require('./src/db/db')

connectToDB()


const notes = []

app.post('/notes',(req , res )=>{
         const {title , description} = req.body
         notes.push(req.body)
         console.log(notes)
})





app.listen(3000,()=>{
    console.log('Server is Running on Port 3000')
})