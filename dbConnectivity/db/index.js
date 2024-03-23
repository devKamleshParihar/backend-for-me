import mongoose from "mongoose";

const connectDb = async ()=>{
try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/dbconnect`)
        console.log(`db connected  ${connectInstance.connection.host}`);   
} catch (error) {
    console.log('db not connected ', error);
    process.exit(1)
}}

export default connectDb;
