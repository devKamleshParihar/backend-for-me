const express = require('express')
const User = require('../module/modules')
const router = express.Router()
router.use(express.json())

router.get("/",(req,res)=>{
    res.render('welcome')
})

router.post('/',async (req,res)=>{
    const {data} = req.body;
    const values = new User({data})
    res.send('done')
    values.save()
})

router.get('/getData', async (req, res) => {
    const value = await User.find({})
    res.json(value);
});
module.exports = router