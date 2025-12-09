const Payroll = require('../models/payrollModel');

const generatePayroll = (data) => Payroll.create(data);

const listPayrolls = () => Payroll.find();

module.exports = {
  generatePayroll,
  listPayrolls,
};

