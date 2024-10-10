const dotenv = require('dotenv');
dotenv.config();// loads the enviromental variables from the .env file



config = {
  development: {
    username: process.env.DB_User,
    password: process.env.DB_PASS,
    database: process.env.Database,
    host: process.env.db_Host,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  jwtSecret: process.env.SECRET_KEY,
};

module.exports = config;

