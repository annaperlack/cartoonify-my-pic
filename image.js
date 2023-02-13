const cloudinary = require("cloudinary").v2;
const { Image } = require("./models");

const uploadPicture = (file_name) => {
  cloudinary.uploader
    .upload(file_name, {
      resource_type: "image",
      effect: "cartoonify",
      height: 300,
      crop: "scale",
    })
    .then(async (result) => {
      console.log("success", JSON.stringify(result.url, null, 2));
      const data = await Image.create({ image: result.url, user_id: 2 });
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

module.exports = uploadPicture;
