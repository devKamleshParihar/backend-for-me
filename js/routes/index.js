const  express = require('express');

const app = express();


app.get("/",(req,res)=>{
    res.render("welcome");
})


module.exports = app;