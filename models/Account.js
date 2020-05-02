const Sequelize = require('sequelize');
const sequelize = require('../public/utils/sequelize');


const Account = sequelize.define('account', 
{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ' '
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ' '
    },
    songCount: {
        type: Sequelize.INTEGER,
        allowNull:true,
        defaultValue: 0 
    },
    messageCount: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
});

module.exports = Account;