const asyncHandler = require('../utils/asyncHandler');
const attendanceService = require('../services/attendanceService');

const recordAttendance = asyncHandler(async (req, res) => {
  const record = await attendanceService.recordAttendance(req.body);
  res.success('Attendance recorded', record, 201);
});

const listAttendance = asyncHandler(async (_req, res) => {
  const records = await attendanceService.listAttendance();
  res.success('Attendance fetched', records);
});

module.exports = {
  recordAttendance,
  listAttendance,
};

