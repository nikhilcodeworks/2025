const mongoose=require('mongoose');
const connectDb= async ()=>{
    try {
        const connection= await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true

            
            
        });

        console.log(`mongodb connection :${connection.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }


}

module.exports=connectDb;