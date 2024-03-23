const UserModel = require('../modules/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = async(req,res)=>{
    const {email , password} = req.body;
    if(!email || !password){
        return res.status(400).send('please fill all required fields')
    }
    const isUserExits =  await UserModel.findOne({email})
    if(isUserExits){
        return res.status(400).send('user already exits')
    }
        try {
            const newUser = new UserModel({email})
            bcryptjs.hash(password, 10, (err, hashedPassword) => {
                newUser.set('password', hashedPassword);
                newUser.save();
                return res.status(200).send('user registration succesfully')
            })
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
}

const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        if(!email || !password){
            return res.status(400).send('please fill all required fields') 
        }
        const user =  await UserModel.findOne({email})
        if(!user){
            return res.status(400).send('user email or password is correct') 
        }
        
            const validateUser = await bcryptjs.compare(password,user.password)
            if (!validateUser) {
                res.status(400).send('User email or password is incorrect');
            }
            else{
                const payload = {
                    userid:user._id,
                    email:user.email
                }
                const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'THIS_IS_A_JWT_SECRET_KEY';
                jwt.sign(payload,JWT_SECRET_KEY ,{ expiresIn: 84600 },async(err,token)=>{
                     await UserModel.updateOne({_id:user._id},{$set:{token}})
                     user.save();
                     res.cookie('usercookie',token,{
                        expires:new Date(Date.now()+9000000),
                        httpOnly:true
                     })
                     const result = {
                        user,
                        token
                     }
                     return res.status(200).send({result})
                })
            }
    } catch (error) {
        res.status(400).send(error)
        console.log('catch block');
    }
    


}

module.exports = {register,login}