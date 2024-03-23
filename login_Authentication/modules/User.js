const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String
    }
})

const user = mongoose.model('user',userSchema);

module.exports= user;