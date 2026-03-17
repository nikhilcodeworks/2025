const jwt= require('jsonwebtoken');
const userModel = require('../models/user.model');
const bcryptjs = require('bcryptjs');
register= async (req,res)=>{
    try {
        const { username,password}= req.body

        if(!username && !password) return res.json({
            message:'one filed is missing '
        })



        const existingUser = await userModel.findOne({
            username
        });
        if(existingUser) return res.json({message:'user already exist'})

    const newUser=await userModel.create(
        {username,
            password:await bcryptjs.hash(password,10)
        }
    )

    const token= jwt.sign({
        id:newUser._id,

    },process.env.jwtsecret)

    res.cookie('token',token);

    res.status(201).json({
        message:'user create sucessfully',newUser
    })

        
    } catch (error) {
        console.log(error)
        
    }


}
login= async (req,res)=>{
    try {
        const { username,password}= req.body

        if(!username && !password) return res.json({
            message:'one filed is missing '
        })



        const existingUser = await userModel.findOne({
            username
        });
        if(!existingUser) return res.json({message:'user not exist'})
        const isvalidpass= await bcryptjs.compare(password,existingUser.password)
if(!isvalidpass){
    return res.json({
        message:"password mismatch"
    })
}
    const token= jwt.sign({
        id:existingUser._id,

    },process.env.jwtsecret)

    res.cookie('token',token);

    res.status(201).json({
        message:'user login sucessfully',existingUser
    })

        
    } catch (error) {
        console.log(error)
        
    }


}

module.exports= {register,login}