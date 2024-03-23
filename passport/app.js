const express = require('express');
const app = express();
const mongooes = require('mongoose');

require('./config/keys')



app.use('/',require('./routes/index'));
app.use('/users',require('./routes/user'));



app.set('view engine','ejs')



app.listen(1200);