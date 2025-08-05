const express = require('express')
const app = express()
const cors = require('cors');
const authRouter = require('./Routes/auth.routes')
const postRouter = require('./Routes/Post.routes')
const cookie = require('cookie-parser')
app.use(express.json())
app.use(cookie())


app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
}));

app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)


module.exports = app