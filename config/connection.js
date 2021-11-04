const Sequelize = require('sequelize');

require('dotenv').config();

if (process.env.JAWSDB_URL) {
  const sequelize = process.env.JAWSDB_URL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_TASK, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3301
  });
}

module.exports = sequelize;
