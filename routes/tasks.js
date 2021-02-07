const express = require('express');
const tasksController = require('../controllers/tasksController');
const routes = express.Router();

routes.post('/tasks/create', tasksController.create);
routes.post('/tasks/update/:id', tasksController.update);
routes.post('/tasks/list/:contributors', tasksController.list);

module.exports = routes;
