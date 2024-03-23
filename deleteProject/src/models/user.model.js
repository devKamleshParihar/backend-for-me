import { Schema,model } from "mongoose"
import brcrypt from 'bcrypt'

const userSchema = new Schema({
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
    password:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:String
    }
},
{
    timestamps:true
})


userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next()
    this.password =  brcrypt.hash(this.password,10)
})


const Users = model('user',userSchema)

export default Users
