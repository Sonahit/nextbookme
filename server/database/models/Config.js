"use strict";
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import("sequelize/types/lib/data-types")} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Config = sequelize.define(
    "Config",
    {
      userId: DataTypes.INTEGER,
      availableHours: DataTypes.INTEGER,
      isPublic: DataTypes.BOOLEAN
    },
    {}
  );
  /**
   * @param {Object.<string, import('../index').Model>} models
   */
  Config.associate = function(models) {
    models.Config.belongsTo(models.User);
  };
  return Config;
};
