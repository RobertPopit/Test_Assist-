const Sequelize = require('sequelize');
const { sequelize } = require('../config/sequelize.config');

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: 'compositeIndex',
  },
  passwordHash: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = { User };
