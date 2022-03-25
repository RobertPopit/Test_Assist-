const clubs = require('../Controller/UserPreferences.controller');
const router = require('express').Router();

module.exports = (app) => {
  router.post('/', clubs.create);
  app.use('/api/clubs', router);
};
