const multer= require('multer');
const upload = multer({storage:multer.memoryStorage()})
const postModel =require('../models/post');
const captionGenerator =require('../service/ai.service');
const uploadpost= require('../service/storag.service');
const postCont = async (req,res)=>{
    try {
       const file= req.file;
        if (!file) return res.status(400).json({ error: "No file uploaded" });
const uploaded = await uploadpost(file.buffer.toString("base64"), file.originalname);
 const caption = await captionGenerator(file.buffer.toString("base64"));

 const newPost= await postModel.create({
    imageUrl:uploaded.url,
    caption:caption,
    user:req.user._id
 })

 res.status(201).json(newPost);
        
    } catch (error) {
        res.json({
            message:error.message|| "error in generating image caption",

            
        })
        
    }


}






module.exports =[upload.single('image'), postCont];