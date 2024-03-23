const auth = async (req,res,next)=>{
    try {
        const token = req.header.authorization;
        res.json(token);


        
    } catch (error) {
        console.log(error);
        
        
    }
}