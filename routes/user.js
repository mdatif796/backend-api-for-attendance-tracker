const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');

router.post('/sign-up', userControllers.createUser);
router.post('/create-session', userControllers.createSession);

module.exports = router;