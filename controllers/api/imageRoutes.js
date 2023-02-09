const router = require('express').Router();
// const generateMosaic = require('../../mosaic_generator');
const uploadPicture = require ('../../cloudinary');
const { Image } = require('../../models');

router.post('/upload', async (req, res) => {
    const { image } = req.files;
    if (!image) return res.sendStatus(400);

    const imagePath = __dirname + '/upload/' + image.name;
    // await image.mv(imagePath);
    uploadPicture(imagePath)
    res.sendStatus(200);
});


router.get('/', async (req, res) => {
    try {
      const ImageData = await Image.findAll({
    //     include: [{
    //       Image, 
    //       attributes: ['image']
    //   }]
      });
      res.status(200).json(ImageData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
