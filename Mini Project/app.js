require('dotenv').config()
const  express = require('express')
require('ejs')
require('./db/connection')



const app = express()
const port = process.env.PORT || 3000



app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use("/",require('./routes/index'))
app.use(express.json())


app.listen(port,()=>console.log('server running on port ' + port))
