const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.json()) 

app.get("/", (req, res) => {
    res.send("Welcome to home page")
})

app.get("/about", (req, res) => {
    res.send("Welcome to About page")
})




let notes = []

app.post('/Notes', (req, res) => {
    notes.push(req.body)
    res.status(201).json({ message: "Note added successfully", note: req.body });
})

app.get('/Notes', (req, res) => {
    res.json({
        message:"Note received successfully",
        notes:notes
    })
})

app.delete('/Notes/:index',(req , res)=>{
    const index = req.params.index
      delete notes[index]     
      res.json({
        message:`Index ${index} NOte Deleted Succesfully`
      })         
})


app.patch("/Notes/:index" , (req , res)=>{
     const index = req.params.index
     const {title} = req.body

     notes[index].title = title;

     res.json({
        message:"Note Updated Succesfully"
     })
})


app.listen(3000, () => {
    console.log("Server is Running on port 3000")
})