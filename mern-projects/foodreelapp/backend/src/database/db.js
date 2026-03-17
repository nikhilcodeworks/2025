const mongoose= require('mongoose');


function connectDB(){
    try {
    mongoose.connect('mongodb://localhost:27017/foodreelDB');
    console.log('Connected to MongoDB');
    
} catch (error) {
    console.log('Error while connecting to MongoDB', error);
    
}
}

module.exports= connectDB;

