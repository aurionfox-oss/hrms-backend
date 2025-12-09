const asyncHandler = require('../utils/asyncHandler');
const payrollService = require('../services/payrollService');

const generatePayroll = asyncHandler(async (req, res) => {
  const payroll = await payrollService.generatePayroll(req.body);
  res.success('Payroll generated', payroll, 201);
});

const listPayrolls = asyncHandler(async (_req, res) => {
  const payrolls = await payrollService.listPayrolls();
  res.success('Payrolls fetched', payrolls);
});

module.exports = {
  generatePayroll,
  listPayrolls,
};

