const { Club } = require('../modules/club.model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.create = async (req, res) => {
  const { name, address, owner } = req.body;
  const club = {
  name,
  address,
  owner,
  };

  Club.create(club)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.message === 'Validation error') {
        res.status(400).send({
          message: 'Club already exists',
          statusCode: 400,
        });
      } else {
        res.status(400).send({
          message:
            err.message || 'Some error occurred while creating the Club.',
        });
      }
    });
};

