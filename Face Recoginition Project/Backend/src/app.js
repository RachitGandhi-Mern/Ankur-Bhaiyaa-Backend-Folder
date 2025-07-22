const express = require('express')
const app = express()
const songRouter = require('./Routes/Song.routes')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use('/', songRouter)


module.exports = app;