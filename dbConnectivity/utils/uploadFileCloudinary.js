import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
       
//ENV VARIABLE ERROR IN THIS CODE 

// cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME , 
//     api_key: process.env.API_KEY , 
//     api_secret: process.env.API_SECRET
//   });

const uploadFile = async (localFilePath)=>{
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME , 
        api_key: process.env.API_KEY , 
        api_secret: process.env.API_SECRET
      });
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        fs.unlinkSync(localFilePath)
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath)
        console.log(error);
        return null
    }
}

export {uploadFile}