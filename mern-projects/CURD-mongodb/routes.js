const express =require('express');
const router = express.Router();
const middleware=require('./middleware')


router.get('/',middleware.getuser)
router.post('/',middleware.createuser)
router.get('/:id',middleware.getuserbyid)
router.put('/:id',middleware.edituser)
router.delete('/:id',middleware.deleteuserbyid);

module.exports=router;