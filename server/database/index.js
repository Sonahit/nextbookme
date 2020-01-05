/**
 * @typedef {import('sequelize').Sequelize} SequelizeInstance
 * @typedef {import('sequelize')} Sequelize
 * @typedef {typeof import('sequelize').Model} Model
 *
 * @typedef {Object.<string, Model>} DynamicModels
 *
 * @typedef {Object} DatabaseInstance
 * @property {Sequelize} Sequelize
 * @property {SequelizeInstance} sequelize
 * @property {DynamicModels} models
 *
 */

/**
 * @type {Sequelize} Sequelize
 */
const Sequelize = require("sequelize");
const config = require("../config/config");
const fs = require("fs");
const path = require("path");
const modelsPath = path.resolve(__dirname, "models");
/**
 * @type {DatabaseInstance} db
 */
const db = {
  Sequelize: false,
  sequelize: false,
  models: {}
};
/**
 * @type {SequelizeInstance} sequelize
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

fs.readdirSync(modelsPath).forEach(model => {
  if (model.endsWith(".js")) {
    const instance = sequelize.import(`${modelsPath}/${model}`);
    db.models[instance.name] = instance;
  }
});

Object.keys(db.models).forEach(model => db.models[model].associate(db.models));

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
