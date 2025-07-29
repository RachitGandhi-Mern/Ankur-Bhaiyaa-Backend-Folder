const app = require('./src/app')
require('dotenv').config()
const ConnectToDB = require('./src/db/db')
ConnectToDB()





const Port = process.env.PORT
app.listen(3000,()=>{
    console.log(`Server is Running on ${Port}`)
})