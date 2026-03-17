const express= require('express');
const cors= require('cors');
const songsRoutes =require('./routes/songs.routes')


const app = express();
app.use(cors());
app.use(express.json());
app.use('/up',songsRoutes)

module.exports =app;