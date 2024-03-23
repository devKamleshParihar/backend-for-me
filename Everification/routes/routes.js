const express = require("express");

const app = express();

const userController = require("../controller/appController");

//post app

app.post("/register", userController.register);
app.post("/login",userController.verifyUser,userController.login);







// //get app

app.get('/user/:username',userController.getUser);
app.get("/generateOTP", userController.verifyUser,userController.localVariable,userController.getOTP);
app.get("/verifyOTP", userController.verifyOTP);
app.get("/createResetSession", userController.createResetSession);

// //put app

app.put("/updateuser", userController.auth,userController.updateUser);
app.put("/resetPassword", userController.verifyUser,userController.resetPassword);

module.exports = app;
