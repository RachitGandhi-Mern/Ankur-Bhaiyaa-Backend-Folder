require('dotenv').config();
const app = require("./src/app")
const connectToDB = require("./src/db/db")
connectToDB()



app.listen(3000,()=>{
    console.log("Server Is Running on port 3000")
})