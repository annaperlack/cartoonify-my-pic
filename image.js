const cloudinary = require('cloudinary').v2;
const { Image } = require('./models');


const uploadPicture = (file_name) => {
    cloudinary.uploader 
    .upload (file_name, {
        resource_type: 'image',
    
    })
    .then((result) => {
        console.log("success", JSON.stringify(result.url, null,2));
        Image.create({image: result.url, user_id: 1})

    })
    .catch((error) => {
        console.log("error", error);
    });
}

module.exports = uploadPicture;