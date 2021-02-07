const Sequelize = require('sequelize');
const sequelize = new Sequelize('tarefas-sintese', 'artur', 'admin123', {
    host: 'mysql742.umbler.com',
    dialect: 'mysql'
});

module.exports = sequelize;