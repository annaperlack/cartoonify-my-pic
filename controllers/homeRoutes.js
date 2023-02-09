const router = require('express').Router();
const { Image, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try{
        const imageData = await Image.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const images = imageData.map((image) => image.get({ plain: true}));

        res.render('')
    }
    catch{}
})

module.exports = router;