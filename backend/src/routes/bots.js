const express = require('express');
const { getBots, getCases } = require('../controllers/botsController');

const router = express.Router();

router.get('/clients', getBots);
router.get('/cases', getCases);

module.exports = router;
