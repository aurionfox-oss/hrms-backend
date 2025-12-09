const express = require('express');
const { createUser, getUsers, getUserById } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);

module.exports = router;

