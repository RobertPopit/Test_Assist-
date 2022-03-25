require('dotenv').config();
module.exports = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  port: process.env.DB_PORT || '8080',
  password: process.env.DB_PASSWORD || 'Assist123!',
  db: process.env.DB || 'postgres',
  dialect: process.env.DB_DIALECT || 'postgres',
  isProduction: process.env.NODE_ENV === 'production',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
