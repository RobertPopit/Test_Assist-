const Sequelize = require('sequelize');
const { sequelize } = require('../config/sequelize.config');
const { User } = require('./user.model');

const Club = sequelize.define('club', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
  },
});
User.hasMany(User, { Club: 'users' });
Club.belongsTo(User, {
  foreignKey: 'owner',
  as: 'user',
});
module.exports = { Club };
