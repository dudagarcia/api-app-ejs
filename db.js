const Sequelize = require('sequelize');
const DATABASE_URL = new Sequelize('de282ajrgsbrl1', 'iagurltrajxkrf', '4264cd01479ab5f5fd6bd1e9b6727fbcc3a003aab49be30bed47b04c56055544', {
    host: 'ec2-52-21-247-176.compute-1.amazonaws.com',
    dialect: 'mysql'
});

module.exports = DATABASE_URL;