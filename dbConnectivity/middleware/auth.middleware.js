import { UserModel } from "../Models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandle.js";
import  Jwt  from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req,res,next)=>{
   try {
    const token = req.cookies?.accessToken || req.header('Authentication')?.replace('bearer','')
 
     if(!token){
         throw new ApiError(401,'unauthorized user')
     }
     const decodedToken = Jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
     const user = await UserModel(decodedToken?.id)
 
     if(!user){
         throw new ApiError(400,'invalid access token')
     }
     req.user = user;
     next()
   } catch (error) {
    throw ApiError(400,error?.message || 'invalid access token')
   }
})