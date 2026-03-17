 const mongoose =require('mongoose');
 const bcrypt=require('bcrypt')
 const AdminSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required :true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            enum:['admin'],
            default:'admin'
        }
    },{timestamps:true}
 );

 AdminSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next();
    this.password=await  bcrypt.hash(this.password,12);
    next();

 })

AdminSchema.methods.comparePassword = async function (givepassword){
    try {
        const isMatch= await bcrypt.compare(givepassword,this.password)
        return isMatch;
        
    } catch (error) {
        throw err;
        
    }
}

 module.exports = mongoose.model('admin', AdminSchema)