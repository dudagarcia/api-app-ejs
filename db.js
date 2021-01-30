const Sequelize = require('sequelize');
const sequelize = new Sequelize('app-ejs', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;