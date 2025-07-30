const app = require('./src/app')
require('dotenv').config()
const ConnectTODB = require('./src/db/db')
ConnectTODB()















const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is Running On Port ${PORT}`)
})