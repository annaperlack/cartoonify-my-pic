const router = require('express').Router();
const uploadPicture = require ('../../image');
const { Image } = require('../../models');

router.post('/upload', async (req, res) => {
    const { image } = req.files;
    if (!image) return res.sendStatus(400);

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
  
      if (!imageData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(imageData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
