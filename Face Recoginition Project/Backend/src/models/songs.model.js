const mongoose = require('mongoose')

const songsSchema = new mongoose.Schema({
    title:String,
    artist:String,
    audio:String,
    mood:String
})

const songsModel= mongoose.model("Songs",songsSchema)

module.exports = songsModel