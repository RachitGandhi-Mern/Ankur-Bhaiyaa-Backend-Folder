const express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadFile = require("../../Service/Storage.Service");
const upload = multer({ storage: multer.memoryStorage() });
const songModel =  require('../models/songs.model')


router.post("/songs", upload.single("audio"), async(req, res) => {
  console.log(req.body);
  console.log(req.file)
  const fileData = await uploadFile(req.file)
  console.log(fileData)
    const song = await songModel.create({
         title : req.body.title,
         artist : req.body.artist,
         audio : fileData.url,
         mood:   req.body.mood
    })

  res.status(200).json({
    message: "songs created succesfully",
    song:song
  });
});

router.get('/songs',async (req , res)=>{
  const {mood} = req.query

  const song =  await songModel.find({
    mood: mood
  })
  res.status(200).json({
    message:"Songs Fetched Succesfully",
    song
  })
})

module.exports = router;
