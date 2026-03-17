const express = require('express');
const cookieParser= require('cookie-parser');
const app= express();
const authRoute= require('./routes/auth.route')
app.use(express.json());
app.use(cookieParser());

app.use('/',authRoute);
app.use('/chat',require('./routes/chats.routes'));


module.exports =app;