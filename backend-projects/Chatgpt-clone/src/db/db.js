const mongoose = require('mongoose');

async function connectDb() {

    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log(`connected to mongodb `)
        
    } catch (error) {
        console.log(error);
        
    }

    
}

module.exports = connectDb;