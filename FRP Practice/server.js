const express = require('express')
const morgan = require('morgan')
// const connectToDb = require('./src/db/db')
const app = express()
app.use(express.json())
app.use(morgan('dev'))
// connectToDb()
const noteModel = require('./src/models/note.model')



app.post("/", async(req , res)=>{
    const {title , content} = req.body
    console.log(title, content)
    await noteModel.create({
        title:title,
        content:content
    })
    res.status(201).json({ message: "Note created successfully!" })
})


app.get("/", async(req ,res)=>{
   const notes =  await noteModel.find()
   res.json({
    messgage:"Here is Your  notes",
    notes
   })
})



app.listen(3000,()=>{
    console.log("server is running")
})