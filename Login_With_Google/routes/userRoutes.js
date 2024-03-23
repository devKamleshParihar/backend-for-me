const express = require('express');
const passport = require('passport');
const router = express.Router()
require('../passport')

router.use(passport.initialize());
router.use(passport.session());

const userController = require('../Usercontroller/userController');

router.get('/',userController.loadAuth);

//auth
router.get('/auth/google',passport.authenticate('google',{scope:['email','profile']}))

router.get('/auth/google/callback',passport.authenticate('google',{
    successRedirect:'/success',
    failureRedirect:'/failure'
}))

router.get('/success',userController.successGoogleLogin);
router.get('/failure',userController.failureGoogleLogin)

module.exports = router