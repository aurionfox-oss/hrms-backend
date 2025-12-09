const express = require('express');
const { createEmployee, listEmployees } = require('../controllers/employeeController');

const router = express.Router();

router.get('/', listEmployees);
router.post('/', createEmployee);

module.exports = router;

