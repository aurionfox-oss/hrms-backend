const Attendance = require('../models/attendanceModel');

const recordAttendance = (data) => Attendance.create(data);

const listAttendance = () => Attendance.find();

module.exports = {
  recordAttendance,
  listAttendance,
};

