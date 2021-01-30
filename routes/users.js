const express = require('express');
const userController = require('../controllers/userController');
const routes = express.Router();

routes.post('/user/login', userController.login);
routes.post('/user/create', userController.create);
routes.put('/user/update/:id', userController.update);
routes.put('/user/updatepassword/:id', userController.updatepassword);
routes.put('/user/updateadmin/:id', userController.updateadmin);
routes.delete('/user/delete/:id', userController.delete);

module.exports = routes;




