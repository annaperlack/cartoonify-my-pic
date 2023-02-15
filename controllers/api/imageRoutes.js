const router = require('express').Router();
const uploadPicture = require ('../../image');
const { Image } = require('../../models');

router.post('/upload', async (req, res) => {
  if (!req.files) return res.sendStatus(400);
    const { image } = req.files;
    const imagePath = __dirname + '/upload/' + image.name;
    await image.mv(imagePath);
    const imageData = await uploadPicture(imagePath, req.session.user_id);


    res.status(200).json(imageData);
});


router.get('/', async (req, res) => {
    try {
      const ImageData = await Image.findAll({
      });
      res.status(200).json(ImageData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const imageData = await Image.destroy({
        where: {
          id: req.params.id,
        },
      });
      console.log(imageData)
  
      if (!imageData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(imageData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

module.exports = router;
