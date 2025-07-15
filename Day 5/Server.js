const express = require('express')
const app = express()
const connectToDb = require('./src/db/db')
const noteModel = require('./src/Models/note.model')
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())
connectToDb()


app.post('/notes',async(req , res)=>{
     const {title , content} = req.body

     await noteModel.create({
        title, content
     })
     res.json({
        messgae:"Note Created Succesfully"
     })

})

app.get('/notes' , async(req,res)=>{
    const Note = await noteModel.find()
    
    res.json({
        messgae:"Notes Fetch Succesfully",
        Note
    })
    
})

app.patch('/notes/:id' , async(req,res)=>{

    const Noteid = req.params.id
    const {title} = req.body

    await noteModel.findOneAndUpdate({
        _id :Noteid
    },{
        title : title
    })

    res.json({
        message : "Note Updated Succesfully"
    })
   

})


app.delete('/notes/:id' , async(req,res)=>{
    const Noteid =  req.params.id

   await noteModel.findOneAndDelete({
    _id : Noteid
   })
   res.json({
    message : "Note deleted Succesfullyt"
   })

})


app.listen(3000,()=>{
    console.log("Server Is Running on Port 3000")
})