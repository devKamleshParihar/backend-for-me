require('dotenv').config();

const express = require('express')
const session  = require('express-session')
const app = express();

app.use(session({resave:false,saveUninitialized:true,secret:process.env.SESSION_SECRET}));

app.set('view engine','ejs');

app.use('/',require('./routes/userRoutes'))

app.listen(1000,()=>console.log('server running'))