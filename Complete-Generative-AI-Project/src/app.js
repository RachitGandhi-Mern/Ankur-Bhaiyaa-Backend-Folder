const express = require('express')
const app = express()
const authRouter = require('./Routes/auth.routes')
const postRouter = require('./Routes/Post.routes')
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)


module.exports = app