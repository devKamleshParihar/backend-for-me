import dotenv from 'dotenv'
import connectDb from './db/index.js'
import { app } from './app.js'


dotenv.config({
    path:'./.env'
})

const port = process.env.PORT

app.on('error' ,(error)=>{
    console.log('Error in ',error);
    throw error
})

//data base connectivity
connectDb()
.then(()=>{
    app.listen(port,()=>console.log('server started ',port))
})
.catch(()=>{
    console.log('db not connected ', error);
})



