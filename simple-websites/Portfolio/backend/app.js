const express= require('express');
const app = express();
const cors= require('cors');
const bodyParser = require("body-parser");
const dotenv =require('dotenv');
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.get('/' , (req,res)=>{
    res.send('server is working')
})

const adminRoutes= require('./routes/adminRoutes');
app.use('/admin',adminRoutes);






module.exports=app;