const mongoose =require('mongoose');

const DB_URI = "mongodb://localhost:27017/mydatabase";

const db= async()=>{
    try {
        await mongoose.connect(
            DB_URI,{
                useNewUrlParser: true,
      useUnifiedTopology: true,   
            }
        )

        console.log('connected');
        
    } catch (error) {
        console.log('not conected')
        
    }
}

module.exports=db;


