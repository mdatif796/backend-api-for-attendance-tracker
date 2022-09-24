const epxress = require('express');
const router = epxress.Router();
const passport = require('passport');

const attendanceControllers = require('../../controllers/api/attendanceControllers');

// this route is accessed by authenticated user only
router.post('/mark-present', passport.authenticate('jwt', {session: false}), attendanceControllers.markPresent);

router.get('/total-users-present', attendanceControllers.totalUsersPresentToday);


module.exports = router;