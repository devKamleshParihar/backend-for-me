const express = require('express');
const cors = require('cors');
require('./database/db');

const app = express();


app.use(cors());
app.use(express.json());
app.disable('x-powered-by');
app.use(express.urlencoded({extended:true}))


app.use('/api',require('./routes/routes'))


app.get('/',(req,res)=>{
    res.send('done');
})



app.listen(1000,()=>{
    console.log('done');
})