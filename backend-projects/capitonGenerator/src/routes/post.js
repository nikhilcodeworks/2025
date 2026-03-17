const express= require('express');
const authmidleware = require('../middlewares/auth.middleware');
const postCont = require('../controllers/post.contr');
const router = express.Router();
router.post('/post',authmidleware ,...postCont)


module.exports=router;