const express = require('express');
const { generatePayroll, listPayrolls } = require('../controllers/payrollController');

const router = express.Router();

router.get('/', listPayrolls);
router.post('/', generatePayroll);

module.exports = router;

