const jwt = require('jsonwebtoken');
const UserModel = require('../modules/User')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'THIS_IS_A_JWT_SECRET_KEY';


const authenticate = async(req,res,next)=>{
try {
    const token  = req.headers.authorization;
    const verify = jwt.verify(token,JWT_SECRET_KEY)
    const rootUser = await UserModel.find({_id:verify.userid});
    if(!rootUser){
        throw new Error('user not found')
    }
    req.token = token
    req.rootUser=rootUser
    req.userId = rootUser.userid || rootUser._id
    console.log(req.token);
    next();
} catch (error) {
    res.status(400).send('unauthorize user no token provide')
    console.log(error);
}

}


module.exports = authenticate
