const { Schema, model } = require('mongoose');

const employeeSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    jobTitle: { type: String, trim: true },
    department: { type: String, trim: true },
    startDate: { type: Date },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  { timestamps: true }
);

module.exports = model('Employee', employeeSchema);

