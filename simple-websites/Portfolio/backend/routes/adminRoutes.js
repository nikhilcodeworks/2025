const express = require('express');
const mongoose = require('mongoose');
const adminModel= require('../models/Admin');
const jwt= require('jsonwebtoken');
const Admin = require('../models/Admin');

const router =express.Router();

router.post('/signup', async(req,res) => {
    const {name,email,password}= req.body;
    try{
        const adminExists= await adminModel.findOne({email});
        if(adminExists) return res.status(400).json({
            message:'email already registerd'
        });
        const newAdmin = new adminModel({name,email,password});
        await newAdmin.save();
        const token =jwt.sign({
            id:newAdmin._id
        },process.env.jwtKey,{expiresIn:"1d"});

        res.status(201).json({
            success:true,
            message:'signup sucessfull',
            token,
            admin:{
                id:newAdmin._id,
                name:newAdmin.name,
                email:newAdmin.email
            }

        })



    }catch(err){
        res.status(500).json({message:err.message});


    }


    

})
router.post('/login', async (req,res) => {
    const {email,password}=req.body;
    try {
        const adminExists= await adminModel.findOne({email});
        if(!adminExists) return res.status(400).json({
            message:'admin does Not exist'
        });
        const isMatch = await adminExists.comparePassword(password);
if (!isMatch) return res.status(400).json(
    {message:'invalid password'}

)
const token =jwt.sign(
    {id:adminExists._id,role:"admin"},
    process.env.jwtKey,
    {expiresIn:'1d'}
)
    res.json({
        success:'true',
        message:'login sucessful',
        token,
        admin:{
            id:adminExists._id,
            name:adminExists.name,
            email:adminExists.email
        }
    })

    } catch (error) {
        res.status(500).json({message:err.message});
        
    }

})
router.post('/forgot-password',async (req,res) => {
    const {email}= req.body;
    try {
        const admin=await adminModel.findOne({email});
        if(!admin) return res.status(404).json({
            message:"admin not found"
        });
        const token =jwt.sign(
            {id:admin._id},
            process.env.jwtKey,
            {
                expiresIn:'5m'
            }

        );
        const resetLink= `http://localhost:3000/reset-password/${token}`;
        const transporter = nodemailer.createTransport(
            {
                service:'gmail',
                auth:{
                    user:process.env.email,
                    userpass:process.env.emailPass
                }
            }
        )

       await transporter.sendMail(
        {
            from:``,
            to:email,
            subject:'Password Reset Link',
            html:`<p>click to reset the password:</p> <a href="${resetLink}>${resetLink}</a>`
        }
       )

       res.json({
        message:'pasword link has been sent to your email'
       });

    } catch (error) {
        res.status(500).json({
            message:err.message
        });
        
    }


});
router.post('/reset-password/:token', async (req,res) => {
    const {token}= req.params;
    const {newPassword}=req.body;
    try {
        const decode =jwt.verify(token,process.env.jwtKey);
        const admin = await adminModel.findById(decode.id);
        if(!admin) return res.status(404).json({
            message:'invalid token'
        });
        admin.password=newPassword;
        await admin.save();

        
        res.json({ message: "Password has been reset successfully." });
    } catch (err) {
        res.status(400).json({ message: "Token expired or invalid." });
    }
});


module.exports =router;