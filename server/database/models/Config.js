"use strict";
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import("sequelize/types/lib/data-types")} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Config = sequelize.define(
    "config",
    {
      userId: DataTypes.INTEGER,
      availableHours: DataTypes.INTEGER,
      isPublic: DataTypes.BOOLEAN
    },
    {}
  );
  Config.associate = function(models) {
    // associations can be defined here
  };
  return Config;
};
