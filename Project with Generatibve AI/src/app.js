const express = require('express')
const app  =  express()
const authRouter = require('./Routes/auth.routes')
const cookiParser = require('cookie-parser')
app.use(express.json())
app.use(cookiParser())
app.use('/auth',authRouter)


module.exports = app