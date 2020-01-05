const Sequelize = require("sequelize");
const config = require("../config/config");
const fs = require("fs");
const path = require("path");
const models = path.resolve(__dirname, "models");
/**
 * @type {import('sequelize').Sequelize} sequelize
 */
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect
  }
);

fs.readdirSync(models).forEach(model => {
  if (model.endsWith(".js")) {
    require(model)(sequelize, Sequelize.DataTypes);
  }
});

module.exports = {
  sequelize,
  Sequelize,
  Model: Sequelize.Model
};
