const mongooes = require('mongoose');

const userSchema = new mongooes.Schema({
    name:String,
    email:String,
    password:String,
    // date:Date.now
});


const user = mongooes.model('user',userSchema);

module.exports = user;