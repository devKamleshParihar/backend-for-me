import { asyncHandle } from "../utils/asyncHandle.js";

const register = asyncHandle( (req,res)=>{
    const {username,email,password} = req.body
    console.log(username);
    res.send(username)
})

export {register}