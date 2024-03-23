const express = require('express');
const product = require('./product');
require('./config');

const app = express();
app.use(express.json());

app.post("/",async (req,res)=>{
    let data = new product(req.body);
    let result = await data.save();
    res.send(result);
});

app.get("/list",async(req,res)=>{
    let data = await product.find();
    res.send(data);
})

app.delete("/item/:_id",async(req,res)=>{
    let data = await product.deleteOne(req.params);
    console.log(data)
})
app.put("/item/:_id",async(req,res)=>{
    let data = await product.updateOne(
        req.params,
        {$set:req.body}
    )
    console.log(data);
})

app.listen(1600);

