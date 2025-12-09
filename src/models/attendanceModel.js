const { Schema, model } = require('mongoose');

const attendanceSchema = new Schema(
  {
    employee: { type: Schema.Types.ObjectId, ref: 'Employee' },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['present', 'absent', 'leave'], default: 'present' },
    note: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = model('Attendance', attendanceSchema);

