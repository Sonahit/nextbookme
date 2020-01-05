("use strict");
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import("sequelize/types/lib/data-types")} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define(
    "Link",
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
  /**
   * @param {Object.<string, import('../index').Model>} models
   */
  Link.associate = function(models) {
    models.Link.belongsTo(models.Booking);
  };
  return Link;
};
