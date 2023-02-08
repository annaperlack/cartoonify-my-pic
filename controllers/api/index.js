const router = require('express').Router();
const imageRoutes = require('./imageRoutes');

router.use('/images', imageRoutes);

module.exports = router;
