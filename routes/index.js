const express = require('express');

const router = express.Router();

router.use('/user', require('./user'));
router.use('/api', require('./api'));

module.exports = router;