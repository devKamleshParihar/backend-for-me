import express from 'express'
import cookieParser from 'cookie-parser'
import  cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors({
    origin:'*',
    limit:'16kb'
}))
// app.use(express.json())
app.use(bodyParser.json({limit:'16kb'}))
app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(express.static('Public'))

//import router
import  router  from './routes/user.routes.js'

//declaration of router
app.use('/api/users',router)

export {app}
