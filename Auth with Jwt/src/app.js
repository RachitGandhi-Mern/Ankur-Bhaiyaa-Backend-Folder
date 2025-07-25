const express = require('express');
const app = express();
app.use(express.json())
const authRoutes = require('./Routes/auth.routes')
app.use('/auth' ,authRoutes )


module.exports = app;