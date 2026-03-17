const jwt = require('jsonwebtoken');



async function authMiddleware(req,res,next) {
    const token = req.cookies.token || '';
    if(!token){
        return res.status(401).json({
            message:"Unauthorized access please login"
        });
    }

    try {
        const decrypt = await jwt.verify(token,process.env.JWTSECRET);
        req.user= decrypt.id;
        next();
        
        
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message:"something went wrong"
        });
        
    }


}

module.exports= authMiddleware;