const User = require('../models/userModel');

const createUser = (data) => User.create(data);

const getUsers = () => User.find();

const getUserById = (id) => User.findById(id);

module.exports = {
  createUser,
  getUsers,
  getUserById,
};

