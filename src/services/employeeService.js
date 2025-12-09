const Employee = require('../models/employeeModel');

const createEmployee = (data) => Employee.create(data);

const listEmployees = () => Employee.find();

module.exports = {
  createEmployee,
  listEmployees,
};

