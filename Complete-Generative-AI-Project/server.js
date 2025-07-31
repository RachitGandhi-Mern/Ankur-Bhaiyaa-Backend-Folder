const app = require('./src/app')
require('dotenv').config()
const ConnectToDB = require('./src/db/db')
ConnectToDB()





const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})