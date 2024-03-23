import mongoose from 'mongoose'

const dbConnect = async ()=>{
   try {
    const dbInstance = await mongoose.connect('mongodb://127.0.0.1/deleteProject')
    console.log(`db connected at port ${dbInstance.connection.host}`);
   } catch (error) {
    console.log(`database connection errpor : ${error}`);
    process.exit(1)
   }
}

export default dbConnect


