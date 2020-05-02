const Sequelize = require('sequelize');
const sequelize = require('../public/utils/sequelize');
const Account = require("./Account");

const Song = sequelize.define('song', 
{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    artist: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        //defaultValue: ' '
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ' '
    },
    reqby: {
        type: Sequelize.STRING,
        allowNull: false,
    }
    
});

Account.hasMany(Song);
Song.belongsTo(Account);

module.exports = Song;