const users = require('../Controller/user.controller');
const router = require('express').Router();

module.exports = (app) => {
  router.post('/', users.create);
  app.use('/api/users', router);
};
