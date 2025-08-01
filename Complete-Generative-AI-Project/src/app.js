const express = require('express')
const app = express()
const authRouter = require('./Routes/auth.routes')
const postRouter = require('./Routes/Post.routes')
const cookie = require('cookie-parser')
app.use(express.json())
app.use(cookie())

app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)


module.exports = app