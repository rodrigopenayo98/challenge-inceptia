const express = require('express');
const authRoutes = require('./auth');
const botsRoutes = require('./bots');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/bots', botsRoutes);

module.exports = router;
