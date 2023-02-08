const router = require('express').Router();
const generateMosaic = require('../../mosaic_generator');

router.post('/upload', async (req, res) => {
    const { image } = req.files;
    if (!image) return res.sendStatus(400);

    const imagePath = __dirname + '/upload/' + image.name;
    await image.mv(imagePath);
    generateMosaic(imagePath)
    // setTimeout(generateMosaic, 1500, imagePath)
    res.sendStatus(200);
});

module.exports = router;
