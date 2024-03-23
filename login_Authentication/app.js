require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();

const port = process.env.PORT || 1000

require('./db/connection')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use('/users/api',require('./routes/user'))


app.listen(port,()=>console.log(`server listen on port http://localhost:${port}`))