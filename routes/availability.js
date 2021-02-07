const express = require('express');
const availabilityController = require('../controllers/availabilityController');
const routes = express.Router();

routes.post('/availability/create', availabilityController.create);
routes.post('/availability/update/:id', availabilityController.update);
routes.post('/availability/list/:userId', availabilityController.list);

module.exports = routes;
