const express = require('express');
const mongooes = require('mongoose');
const ejs = require('hbs');
const app = express();


require('./config/key');


app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.set('view engine','ejs')


app.use(express.json());

// app.post("/list",async (req,res)=>{
//     let data = new product(req.body);
//     let result = await data.save();
//     res.send(result);
// });

// app.get("/",async(req,res)=>{
//     let data = await product.find();
//     res.send(data);
// })

// app.delete("/item/:_id",async(req,res)=>{
//     let data = await product.deleteOne(req.params);
//     console.log(data)
// })
// app.put("/item/:_id",async(req,res)=>{
//     let data = await product.updateOne(
//         req.params,
//         {$set:req.body}
//     )
//     console.log(data);
// })

app.listen(3000);

