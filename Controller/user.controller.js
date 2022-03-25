const { User } = require('../modules/user.model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt = require('bcryptjs');

exports.create = async (req, res) => {
  const { name, email, passwordHash } = req.body;
  if (!passwordHash || passwordHash === '') {
    res.status(400).send({
      message: 'Password cannot be empty',
      statusCode: 400,
    });
  } else {
    //Password encryption
    encyrptedPassword = await bcrypt.hash(passwordHash, 10);
  }

  const user = {
    name,
    email,
    passwordHash: encyrptedPassword,
  };

  User.create(user)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.message === 'Validation error') {
        res.status(400).send({
          message: 'User already exists',
          statusCode: 400,
        });
      } else {
        res.status(400).send({
          message:
            err.message || 'Some error occurred while creating the User.',
        });
      }
    });
};
