const mongoose = require('mongoose');
const dotenv= require('dotenv');

const connectDb= async()=>{
    try {

        await mongoose.connect(process.env.MongoUri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ MongoDB connected')
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }


}

module.exports= connectDb;