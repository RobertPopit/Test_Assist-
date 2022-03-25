const { sequelize } = require('./config/sequelize.config');
const express = require('express');
const app = express();
const userRoutes = require('./routes/user.route');
const userprefRoutes = require('./routes/UserPreferences.route');
const clubRoutes = require('./routes/club.route');
require('dotenv').config();
app.use(express.json());
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.get('/', function (req, res) {
  res.end('Hello Robert\n');
});

sequelize.sync();

userRoutes(app);
userprefRoutes(app);
clubRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
