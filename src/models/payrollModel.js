const { Schema, model } = require('mongoose');

const payrollSchema = new Schema(
  {
    employee: { type: Schema.Types.ObjectId, ref: 'Employee' },
    periodStart: { type: Date },
    periodEnd: { type: Date },
    amount: { type: Number, default: 0 },
    status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
  },
  { timestamps: true }
);

module.exports = model('Payroll', payrollSchema);

