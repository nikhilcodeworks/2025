const userModel= require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function register(req,res) {

    const {fullName:{firstName,lastName},email,password}=req.body;
    try {

       const isUserExist= await userModel.findOne({email}) ;
       if(isUserExist){
        return res.status(400).json({
            message:"User Already Exist"
        })
       }
      
       const hashPassword=await bcrypt.hash(password,10)


        const user =await userModel.create({
            fullName:{
                firstName,lastName
            },
            email,password:hashPassword
        })

        const tokon = jwt.sign({
            id:user._id
        },process.env.JWTSECRET);

        res.json({
            message:'user created sucesfully',
            user
        })
        
    } catch (error) {
        console.log(error)
        
    } 

    
}



async function login(req,res) {

    const {email,password}=req.body;
    try {

       const user= await userModel.findOne({email}) ;
       if(!user){
        return res.status(400).json({
            message:"User doesn't exist"
        })
       }
      
       const ispassValid = await bcrypt.compare(password,user.password)
        if(!ispassValid){
        return res.status(400).json({
            message:"password is wrong"
        })
       }

        const token = jwt.sign({
            id:user._id
        },process.env.JWTSECRET);

        res.cookie('token',token);
res.json({
            message:'user login  sucesfully',
            user
        })

        
    } catch (error) {
        console.log(error)
        
    } 
}

module.exports ={
    register,login
}