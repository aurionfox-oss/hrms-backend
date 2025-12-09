const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'manager', 'employee'], default: 'employee' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);

