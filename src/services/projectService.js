const Project = require('../models/projectModel');

const createProject = (data) => Project.create(data);

const listProjects = () => Project.find();

module.exports = {
  createProject,
  listProjects,
};

