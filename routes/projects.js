const express = require('express');
const projectsController = require('../controllers/projectsController');
const routes = express.Router();

routes.post('/projects/create', projectsController.create);
routes.post('/projects/update/:id', projectsController.update);
routes.post('/projects/list/:status', projectsController.list);

module.exports = routes;
