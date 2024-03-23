const mongooes = require('mongoose');
const productSchemas = new mongooes.Schema({
    name : String,
    father:String,
    mother:String,
    phone:Number
});


module.exports =  mongooes.model('courses',productSchemas);