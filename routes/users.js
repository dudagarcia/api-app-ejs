const express = require('express');
const userController = require('../controllers/userController');
const routes = express.Router();

routes.post('/user/login', userController.login);
routes.post('/user/create', userController.create);
routes.post('/user/update/:id', userController.update);
routes.post('/user/updatepassword/:id', userController.updatepassword);
routes.post('/user/updateadmin/:id', userController.updateadmin);
routes.post('/user/delete/:id', userController.delete);
routes.post('/user/updateemailcode/:id', userController.updateemailcode);

module.exports = routes;




