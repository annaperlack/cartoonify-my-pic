const router = require('express').Router();
const imageRoutes = require('./imageRoutes');
const userRoutes = require('./userRoutes');

router.use('/images', imageRoutes);
router.use('/users', userRoutes);

module.exports = router;
