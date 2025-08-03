const ImageKit = require("imagekit");
const mongoose = require("mongoose");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file, fileName) {
  try {
    const response = await imagekit.upload({
      file: file.buffer,
      fileName: fileName || new mongoose.Types.ObjectId().toString(),
      folder: "Insta-Audio"
    });
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = uploadFile;