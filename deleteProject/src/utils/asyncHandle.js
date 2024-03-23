const  asyncHandle = (requestHandle)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandle(req,res,next)).catch((err)=>{
            console.log(`error ${err}`);
        })
    }
}

export {asyncHandle}