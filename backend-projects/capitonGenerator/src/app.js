const express =  require('express');
const authRoutes = require('./routes/auth');
const post = require('./routes/post');
const cookieParser= require('cookie-parser');


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/auth',authRoutes)
app.use('/auth/api',post)


module.exports =app;