const express = require('express');

const router = express.Router();

router.use('/users', require('./user'));
router.use('/api', require('./api'));

module.exports = router;