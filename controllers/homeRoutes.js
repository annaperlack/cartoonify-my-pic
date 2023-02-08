const router = require('express').Router();
const { Image, User } = require('../models');
const withAuth = require('../utils/auth');

module.exports = router;