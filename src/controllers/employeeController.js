const asyncHandler = require('../utils/asyncHandler');
const employeeService = require('../services/employeeService');

const createEmployee = asyncHandler(async (req, res) => {
  const employee = await employeeService.createEmployee(req.body);
  res.success('Employee created', employee, 201);
});

const listEmployees = asyncHandler(async (_req, res) => {
  const employees = await employeeService.listEmployees();
  res.success('Employees fetched', employees);
});

module.exports = {
  createEmployee,
  listEmployees,
};

