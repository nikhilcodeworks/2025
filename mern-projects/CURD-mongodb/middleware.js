const user = require("./usermodel")


exports.getuser= async (req,res) => {

    const users=await user.find();
    res.json(users);
    
    


}

exports.createuser= async (req,res) => {

    const adduser= new user(req.body)
    await adduser.save();
    res.json(adduser)


    

}

exports.getuserbyid= async (req,res) => {
    
    const userid= req.params.id;
    const getuser=await user.findById(userid)
    res.json(getuser)


}

exports.edituser= async (req,res) => {
    const userid= req.params.id;
    const getuser=await user.findById(userid)
    const updateuser= await user.updateOne(getuser,req.body,{
        new:true,
        runValidators:true
    })
    res.json(updateuser)



    

}

exports.deleteuserbyid= async (req,res) => {
    const userid= req.params.id;
    const getuser=await user.findById(userid)
    const updateuser= await user.deleteOne(getuser,req.body,{
        new:true,
        runValidators:true
    })
    res.json(updateuser)
    

}


