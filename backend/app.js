import  express  from "express";
const app = express();

const port = 3000

app.get('/api/jokes',(req,res)=>{
    
    const jokes = [
        {
            id:1,
            title:"first joke",
            content:"this is a  first joke"
        },
        {
            id:2,
            title:"second joke",
            content:"this is a second joke"
        },
        {
            id:3,
            title:" third joke",
            content:"this is a third joke"
        },
        {
            id:4,
            title:" fourth  joke",
            content:"this is a  fourth joke"
        },
        {
            id:5,
            title:" fivth joke",
            content:"this is a fivth joke"
        }
    ]

    res.send(jokes)
})

app.listen(port,()=>console.log('server running'))