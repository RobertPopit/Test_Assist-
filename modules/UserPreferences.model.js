const Sequelize = require('sequelize');
const { sequelize } = require('../config/sequelize.config');
const { User } = require('./user.model');

const UserPref = sequelize.define('userpref', {
  timezone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
User.hasMany(User, { UserPref: 'users' });
UserPref.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});
module.exports = { UserPref };
