import { app}  from "./app.js";
import dbConnect from "./database/db.js";



dbConnect()
.then(()=>{
    app.listen(4000,()=>{
        console.log('server running on port 4000');
    })
}).catch((err)=>{
    console.log('db not connected ', err);
})

