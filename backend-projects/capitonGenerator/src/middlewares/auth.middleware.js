const jwt = require('jsonwebtoken');
const userModel= require('../models/user.model');


const authmidleware = async (req,res,next)=>{
    const token =req.cookies.token;
    if(!token) return res.json({message:'token dont exist'});
    if(token){
      try {
        const decoded =  jwt.verify(token,process.env.jwtsecret)

        const user= await userModel.findOne({
            _id: decoded.id
        })

        req.user=user;

         next()

      } catch (error) {
        return res.json({message:'token invalid'})  
      }
    }

   
}





module.exports =authmidleware;