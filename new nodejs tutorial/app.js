const express = require('express');
const app = express();
const path = require('path');
const cookiesParser = require('cookie-parser');
const mongoose = require('mongoose');

//database
mongoose.connect("mongodb://127.0.0.1:27017",
    {dbname:"backend"})
    .then(()=>{
        console.log('connected');
    })
    .catch((e)=>{
        console.log(e);
    })

//userschema
const userSchema = new mongoose.Schema({
    name:String,
    password:String,
})
const User = mongoose.model("udata",userSchema)


app.set("view engine","ejs");

app.use(express.static(path.join(path.resolve(),'public')))
app.use(express.urlencoded({extended:true}))
app.use(cookiesParser());

const isAutacticate = (req,res,next)=>{
    const token = req.cookies.token
    if(token)
    {
        next();
    }
    else{
        res.render('login')
    }

}

// app.get('/',(req,res)=>{
//     res.render('index');
// });
app.get('/',isAutacticate,(req,res)=>{
    res.render('logout');
});

//second mathod Autacticate
// app.get('/',(req,res)=>{
//     const token = req.cookies.token
//     if(token)
//     {
//         res.render('logout')
//     }
//     else{
//         res.render('login')
//     }

// });

app.post('/login',async(req,res)=>{
    console.log(req.body);
    const name=req.body.name;
    const password=req.body.password;
    const user = await User.create({
        name,password
    })
    res.cookie("token",user._id,{
        httpOnly:true,
        expires: new Date(Date.now() + 60 * 1000)
    });
    res.redirect('/');  
})
app.get('/logout',(req,res)=>{
    res.cookie("token",null,{
        httpOnly:true,
        expires: new Date(Date.now())
    });
    res.redirect('/');  
})
// app.post('/',(req,res)=>{
    // console.log(req.body);
// })

app.listen(1000,()=>{
    console.log('server is  working');
});