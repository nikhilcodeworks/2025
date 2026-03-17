const db= require('./config/db')
const app = require('./app');
const connectDb = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT

// connectDb();

// app.listen(PORT,()=>{
//     console.log(`server is running at ${PORT}`);
// });

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
});

