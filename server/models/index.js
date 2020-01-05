const Sequelize = require("sequelize");
/**
 * @type {import('sequelize').Sequelize} sequelize
 */
const sequelize = new Sequelize("booking_repository", "test", "test", {
  host: "localhost",
  dialect: "mysql"
});

module.exports.default = sequelize;
module.exports.Sequelize = Sequelize;
module.exports.model = Sequelize.Model;
