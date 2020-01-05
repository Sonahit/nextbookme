"use strict";
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import("sequelize/types/lib/data-types")} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      userId: {
        type: DataTypes.INTEGER,
        unique: true
      }
    },
    {}
  );
  /**
   * @param {Object.<string, import('../index').Model>} models
   */
  Admin.associate = function(models) {
    models.Admin.belongsTo(models.User);
  };
  return Admin;
};
