const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    startDate: { type: Date },
    endDate: { type: Date },
    members: [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
  },
  { timestamps: true }
);

module.exports = model('Project', projectSchema);

