import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandle.js";
import { UserModel } from "../Models/User.model.js"
import { uploadFile } from "../utils/uploadFileCloudinary.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import  Jwt  from "jsonwebtoken";


const generateAccessTokenAndRefreshToken = async (userId)=>{
   try {
      const user = await UserModel.findById(userId)
      const accessToken = user.generateAccessToken()
      const refreshToken = user.generateRefreshToken()

      user.refreshToken = accessToken
      user.save({validateBeforeSave:false})

      return {refreshToken,accessToken}
      
   } catch (error) {
      throw new ApiError(500,'something went wrong while generating access token and refresh token')
   }
}

const register = asyncHandler(async (req,res)=>{
   const {username,fullName,email,password} = req.body;


   if([username,fullName,email,password].some((fields)=>fields?.trim() === '')){
      throw new ApiError(400,'please fill all required fields')
   }

   const existedUser = await UserModel.findOne({
      $or:[{email},{username}]
   })

   if(existedUser){
      throw new ApiError(409,'user with username and email already existed ')
   }

   const avatarLocalPath = req.files?.avatar[0]?.path;
   // const coverImageLocalPath = req.files?.coverImage[0]?.path;

   let coverImageLocalPath;
   if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0 ){
      coverImageLocalPath = req.files.coverImage[0].path;
   }

   if(!avatarLocalPath){
      throw new ApiError(400,'avatar image is required')
   }

   const avatar =  await uploadFile(avatarLocalPath)
   const coverImage = await uploadFile(coverImageLocalPath)

   if(!avatar){
      throw new ApiError(400,'avatar image is required')
   }

    const User =  await UserModel.create({
      avatar:avatar.url,
      fullName,
      coverImage:coverImage?.url || '',
      email,
      password,
      username:username.toLowerCase()
   })

   const createdUser = await UserModel.findById(User._id).select(
      '-password -refreshToken'
   )

   if(!createdUser){
      throw new ApiError(500,'something went wrong while registering the user')
   }

   return res.status(201).json(
      new ApiResponce(200,createdUser,'user regitration succesfully')
   )
   
})


const login = asyncHandler(async (req,res)=>{
   
      try {
         const {username,email,password} = req.body
         // if(!(username || email))
         // if(!email && !username)
         // console.log(req.body);
         if(!username && !email){
            // console.log(username,email);
            throw new ApiError(400,'user username and email is not found')
         }
         const user =  await UserModel.findOne({
            $or:[{username},{email}]
         })
         if(!user){
            throw new ApiError(400,'user does not exist')
         }
   
          const isPasswordValid = await user.isPasswordCorrected(password)
   
          if(!isPasswordValid){
            throw new ApiError(400,'password does not matched')
         }
   
         const {refreshToken,accessToken} = await generateAccessTokenAndRefreshToken(user._id)
         console.log(refreshToken);
   
         const loggedInUser =  await UserModel.findOne(user._id).select('-refreshToken,password')
      
         const options = {
            httpOnly : true,
            secure: true
         }
   
         return res.status(200)
         .cookie('accessToken',accessToken,options)
         .cookie('refreshToken',refreshToken,options)
         .json(
            new ApiResponce(
               200,
               {
                  user: accessToken,refreshToken,loggedInUser
               },
               'user logged in successfully'
            )
         )
      } catch (error) {
         throw new ApiError(400,error?.message || 'logged in un successfully')
      }

})

const logout = asyncHandler(async (req,res)=>{
   await UserModel.findByIdAndUpdate(req.user._id,
      {
         $set:{
            refreshToken : undefined
         }
      },
      {
         new:true
      })
      const options = {
         httpOnly : true,
         secure: true
      }

      res.status(200)
      .clearCookie("accessToken",options)
      .clearCookie("refreshToken",options)
      .json(new ApiResponce(200,{},'user logged out successfully'))
})

const refreshAccessToken = asyncHandler(async (req,res)=>{
  const incomingRefreshToken =  req.cookie?.refreshToken || req.body?.refreshToken

  if(!incomingRefreshToken){
   throw new ApiError(400,'unauthorized request')
  }

  const decodedToken = Jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET)

  const user  = await UserModel.findById(decodedToken?._id)
if(!user){
   throw new ApiError(400,'invalid refresh token')
  }

  if(incomingRefreshToken !== user?.refreshToken){
   throw new ApiError(400,'refresh token expired and used')
  }

  const options = {
   httpOnly : true,
   secure: true
   }

   const {newrefreshToken,accessToken} = await generateAccessTokenAndRefreshToken(user._id)

   res.status(200)
   .cookie('accessToken',accessToken,options)
   .cookie('refreshToken',newrefreshToken,options)
   .json(new ApiResponce(200,{accessToken,newrefreshToken:newrefreshToken},'token refreshed'))



})

export {register,login,logout,refreshAccessToken}