import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null;
        //upload file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto'
        })
        //file is uploaded to cloudinary
        //console.log('File is uploaded to cloudinary',response.url);
        fs.unlinkSync(localFilePath) // remove file from local storage as upload operation is successful
        return response;
    }
    catch (error) {
        fs.unlinkSync(localFilePath) // remove file from local storage as upload operation failed
        return null;
    }
};

export {uploadOnCloudinary}

/*
cloudinary.uploader.upload(
  '',
  { public_id: 'test' },
  function (error, result) {
    console.log(result, error);
  }
);

*/
