const { UserPref } = require('../modules/UserPreferences.model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.create = async (req, res) => {
  const { user_id, country, timezone } = req.body;
  const userpref = {
    user_id,
    country,
    timezone,
  };

  UserPref.create(userpref)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.message === 'Validation error') {
        res.status(400).send({
          message: 'UserPref already exists',
          statusCode: 400,
        });
      } else {
        res.status(400).send({
          message:
            err.message || 'Some error occurred while creating the UserPref.',
        });
      }
    });
};
exports.update = (req, res) => {
  const id = req.params.id;
  UserPref.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'UserPref was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update UserPref with id=${id}. Maybe UserPref was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: 'Error updating UserPref with id=' + id,
      });
    });
};
