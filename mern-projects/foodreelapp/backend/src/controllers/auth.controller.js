const { default: mongoose } = require('mongoose');
const userModel=require('../models/user.model');
const bcryptjs=require('bcryptjs');
const jwt =require('jsonwebtoken');


async function registerController(req,res) {
    const {name,email,password}= req.body;

    const emailAlreadyExists= await userModel.findOne({
        email
    });

    if(emailAlreadyExists) {
        return res.status(400).json(
            {
                message:"user already exist"
            }
        )

    }

    const hashPassword= bcryptjs.hash(password,12);

    const newUser= await userModel.create(
        {
            name,email,password:hashPassword

        }
    )

    const token = jwt.sign({
        id:newUser._id
    },process.env.JWTSECRET);

    res.cookie("token",token);

    res.status(201).json({
        message:'',
        user:{
            id: newUser._id,
            email:newUser.email,
            name:newUser.name
        }

    })
}


async function loginController(req,res) {
    const {email,password}= req.body;

    const user= await userModel.find({
        email
    });

    if(!user){
        res.status(404).json({
            message:"invalid email"
        });
    }


    const isPasswordValid=await bcryptjs.compare(password,user.password);

    if(!isPasswordValid){
        return res.send(400).json({
            message:"wrong password"
        });
    }

    const token = jwt.sign({
        id:user._id,
    },process.eventNames.JWTSECRET)

    res.cookie('token',token)

     res.status(201).json({
        message:'',
        user:{
            id: user._id,
            email:user.email,
            name:user.name
        }

    })










}


async function logoutController(req,res){
    res.clearCookie('token',token)
    res.status(200).json({
        message:"logout sucesfully"
    });
}

module.exports ={
    registerController,loginController,logoutController
}