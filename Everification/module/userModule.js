const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    username:{
        type:String,
        required:[true,'please provide uniquie username'],
        unique:[true,'username already exits']
    },
    email:{
        type:String,
        required:[true,'please provide uniquie email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'please provide a password'],
    },
    profile:{
        type:String,
    },
    address:{
        type:String,
    },
    mobile:{
        type:Number,
    },
    token:{
        type:String
    }
    
});

module.exports = mongoose.model('user',userSchema);