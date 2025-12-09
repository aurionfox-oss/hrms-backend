const express = require('express');
const { createProject, listProjects } = require('../controllers/projectController');

const router = express.Router();

router.get('/', listProjects);
router.post('/', createProject);

module.exports = router;

