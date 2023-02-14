const cloudinary = require("cloudinary").v2;
const { Image } = require("./models");

const uploadPicture = (file_name, user_id) => {
  cloudinary.uploader
    .upload(file_name, {
      resource_type: "image",
      effect: "cartoonify",
      height: 300,
      crop: "scale",
    })
    .then(async (result) => {
      const data = await Image.create({ image: result.url, user_id: user_id });
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

module.exports = uploadPicture;
