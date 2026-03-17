require('dotenv').config();
const app= require('./src/app');


//connected to database
const connectDB= require('./src/database/db');
connectDB();

app.get("/",(req,res)=>{
    res.send("Hello from FoodReel");
    
});



app.listen(process.env.PORT,()=>{
    console.log("Server is running on port " + process.env.PORT);
});