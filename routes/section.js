const express = require('express');
const sectionController = require('../controllers/sectionController');
const routes = express.Router();

routes.post('/section/create', sectionController.create);
routes.post('/section/update/:id', sectionController.update);
routes.post('/section/delete/:id', sectionController.delete);
routes.post('/section/list', sectionController.list);

module.exports = routes;
