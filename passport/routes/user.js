const  express = require('express');
const product = require('../model/Users');
// const routes = express.Router();

const app = express();
app.use(express.json);

//Login
app.get("/login",(req,res)=>{
    res.render("login");
})


//Register
app.get("/register",(req,res)=>{
    res.render("register");
})

//register handle
app.post("/register",async(req,res)=>{
    // const name = req.body;
    // const email = req.body;
    // const password = req.body;
    // const password2 = req.body;
    let data = await product.find();
    console.log(data)
    // let err=[];
   
    


    // if(!name || !email  || !password || password2)
    // {
    //     err.push("please")
    // }
   

    // if(password !== password2)
    // {
    //     res.send("password not matched")
    // }
    // else
    // {
    //     console.log("done")
    // }
    // res.send(req.body);
    
})




module.exports = app;