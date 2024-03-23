const loadAuth = (req,res)=>{
    res.render('auth')
}

const successGoogleLogin = (req,res)=>{
    if(!req.user)
    {
        res.redirect('/failure')

    }
    console.log(req.user);
    res.send(req.user.email)
}

const failureGoogleLogin=(req,res)=>{
    res.send('error')
}

module.exports = {loadAuth,successGoogleLogin,failureGoogleLogin}