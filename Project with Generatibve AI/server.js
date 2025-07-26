const app = require("./src/app");
require('dotenv').config()
const connectToDb = require('./src/db/db')
connectToDb()


app.listen(3000,()=>{
    console.log("Server Is Running on port 3000")
})
