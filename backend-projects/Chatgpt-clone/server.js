require('dotenv').config();
const app = require('./src/app');
const connectDb=require('./src/db/db');
const http = require('http');
const initSocketServer= require('./src/sockets/sockte.server');


connectDb();

const server = http.createServer(app);
initSocketServer(server);

server.listen(process.env.PORT, ()=>{
    console.log(`server is working on ${process.env.PORT}`)
});



