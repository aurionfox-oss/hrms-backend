const express = require('express');
const { recordAttendance, listAttendance } = require('../controllers/attendanceController');

const router = express.Router();

router.get('/', listAttendance);
router.post('/', recordAttendance);

module.exports = router;

