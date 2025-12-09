const asyncHandler = require('../utils/asyncHandler');
const userService = require('../services/userService');

const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.success('User created', user, 201);
});

const getUsers = asyncHandler(async (_req, res) => {
  const users = await userService.getUsers();
  res.success('Users fetched', users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id);

  if (!user) {
    return res.fail('User not found', 404);
  }

  res.success('User fetched', user);
});

module.exports = {
  createUser,
  getUsers,
  getUserById,
};

