const asyncHandler = require('../utils/asyncHandler');
const projectService = require('../services/projectService');

const createProject = asyncHandler(async (req, res) => {
  const project = await projectService.createProject(req.body);
  res.success('Project created', project, 201);
});

const listProjects = asyncHandler(async (_req, res) => {
  const projects = await projectService.listProjects();
  res.success('Projects fetched', projects);
});

module.exports = {
  createProject,
  listProjects,
};

