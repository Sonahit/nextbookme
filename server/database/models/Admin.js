"use strict";
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import("sequelize/types/lib/data-types")} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "admin",
    {
      userId: {
        type: DataTypes.INTEGER,
        unique: true
      }
    },
    {}
  );
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};
