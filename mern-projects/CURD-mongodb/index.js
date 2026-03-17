const express = require("express");
const app= express();
const port=3000;
const db=require('./db');
const routes= require('./routes')

db();


app.use(express.json());

app.use('/users',
    routes
    

)



app.listen(port,()=>{
    console.log('running');
})



