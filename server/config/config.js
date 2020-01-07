const winston = require("winston");

module.exports = {
  port: 3000,
  development: {
    username: "root",
    password: "root",
    database: "booking_repository",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: winston.debug
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: winston.debug
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: winston.debug
  }
};
