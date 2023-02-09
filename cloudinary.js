const cloudinary = require('cloudinary').v2;

const uploadPicture = (file_name) => {
    cloudinary.uploader 
    .upload (file_name, {
        resource_type: 'image',
    })
    .then((result) => {
        console.log("success", JSON.stringify(result.url, null,2));
    })
    .catch((error) => {
        console.log("error", JSON.stringify(error, null, 2));
    });
}

module.exports = uploadPicture;