const userspref = require('../Controller/UserPreferences.controller');
const router = require('express').Router();

module.exports = (app) => {
  router.post('/', userspref.create);
  router.put('/:id', userspref.update);
  app.use('/api/userspref', router);
};
