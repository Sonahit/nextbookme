("use strict");
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import("sequelize/types/lib/data-types")} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define(
    "link",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bookingId: {
        type: DataTypes.INTEGER,
        unique: true
      },
      updateToken: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: true
      },
      deleteToken: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: true
      }
    },
    {}
  );
  Link.associate = function(models) {
    // associations can be defined here
  };
  return Link;
};
