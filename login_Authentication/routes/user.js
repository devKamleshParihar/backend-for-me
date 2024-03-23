const express = require('express')
const UserModel = require('../modules/User')
const Controllers = require('../controllers/user')
const authenticate = require('../Middleware/Authenticate')
const router = express.Router()

router.post('/register',Controllers.register)
router.post('/login',Controllers.login)
router.get('/validuser',authenticate,async(req,res)=>{
    try {
        const validateUser = await UserModel.findOne({_id:req.userId});
        res.status(200).send(validateUser)
        
        
    } catch (error) {
        res.status(400).send(error)
        res
    }
})

router.get('/logout',authenticate,async(req,res)=>{
    try {
       
       res.clearCookie("usercookie",{path:'/'})
       res.status(200).send(req.token)
    
    } catch (error) {
        
    }

})

module.exports = router