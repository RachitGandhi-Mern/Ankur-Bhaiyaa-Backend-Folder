const generateCaption = require("../service/ai.service");
const uploadFile = require("../service/storage.service");
const { v4: uuidv4 } = require("uuid");
const postModel = require("../Model/Post.model");

exports.createPostController = async (req, res) => {
  try {
    const { file } = req;
    const base64ImageFile = file.buffer.toString("base64");
    const caption = await generateCaption(base64ImageFile);
    const result = await uploadFile(file, `${uuidv4()}`);
    // res.status(200).json({ caption, result });

    const post = await postModel.create({
      image: result.url,
      caption: caption,
      userId: req.user._id,
    });
    res.status(201).json({
      message: "Post Created Succesfully",
      post,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.getPosts = async (req, res) => {
  try {
    const Posts = await postModel.find();
    res.status(200).json({
      message: "Post Fetched Succesfully",
      Posts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
