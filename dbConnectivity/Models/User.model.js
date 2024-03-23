import Mongoose,{Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        avatar:{
            type:String,
            required:true,
        },
        coverImage:{
            type:String,
        },
        password:{
            type:String,
            required:true
        },
        fullName:{
            type:String,
            required:true
        },
        refreshToken:{
            type:String,

        },
        watchVideo:
        [
            {
            type:Schema.Types.ObjectId,
            ref:'Video'
        }
    ]
    },{
        timestamps:true
    }
)

userSchema.pre('save',async function (next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password ,10)
    next()
})

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id,
           
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.isPasswordCorrected = async function(password){
    return await bcrypt.compare(password,this.password)
}

 export const UserModel = model('User',userSchema)