const generateCaption = require('../service/ai.service')

exports.createPostController = async (req,res)=>{
    try {
        const {file} = req
        const base64ImageFile = file.buffer.toString('base64')
        const caption = await generateCaption(base64ImageFile)
        console.log(caption)
        res.status(200).json({ caption }); 
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

