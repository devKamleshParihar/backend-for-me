const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cors = require('cors')

require('./db/db');
const users = require('./modules/users')

const app = express();

const port = process.env.PORT || 1000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('done');
})

app.post('/api/register',async (req,res,next)=>{
    try {
        const {fullName,email,password} = req.body;
        if(!fullName || !email || !password){
            res.status(400).send('please fill all required fill')

        }else{
            const isAlreadyExist = await users.findOne({email})
            if(isAlreadyExist){

            res.status(400).send('user already exist');
            }
            else{
                const newUser = new users({fullName,email})
                bcryptjs.hash(password,10,(err,hashedPassword)=>{
                    newUser.set('password',hashedPassword);
                    newUser.save();
                    next()
                })
                return res.status(200).send('user register successfully')
            }

        }
        
    } catch (error) {
        console.log(error);
    }
})

app.post('/api/login',async (req,res,next)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            res.status(400).send('please fill all required fields');
        }else{
            const user = await users.findOne({email})
            if(!user){
                res.status(400).send('email and password incorrect');
            }else{
                const validateUser = await bcryptjs.compare(password,user.password)
                if(!validateUser){
                    res.status(400).send('email and password incorrect');
                }else{
                    const payload = {
                        userId:user.id,
                        email:user.email
                    }
                    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'this_is_a_jwt_secret_key';
                    jwt.sign(payload,JWT_SECRET_KEY,{expiresIn:84600},async(err,token)=>{
                        await users.updateOne({_id:user.id},{
                            $set:{token}
                        })
                        await user.save();
                        next()
                    })
                    res.status(200).json({user})
                }
            }
        }
        
    } catch (error) {
        console.log(error);
    }
})

app.listen(port,()=>console.log('Server running'))