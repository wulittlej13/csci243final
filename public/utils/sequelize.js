const Sequelize = require('sequelize');
const sequelize = new Sequelize('my_littlej13_partylist', 'my.littlej13', 'pass', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = sequelize;