const express = require('express');

const userRoutes = require('./userRoutes');
const employeeRoutes = require('./employeeRoutes');
const attendanceRoutes = require('./attendanceRoutes');
const payrollRoutes = require('./payrollRoutes');
const projectRoutes = require('./projectRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/employees', employeeRoutes);
router.use('/attendance', attendanceRoutes);
router.use('/payroll', payrollRoutes);
router.use('/projects', projectRoutes);

module.exports = router;

