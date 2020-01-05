("use strict");
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import("sequelize/types/lib/data-types")} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      timeStart: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      timeEnd: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  /**
   * @param {Object.<string, import('../index').Model>} models
   */
  Booking.associate = function(models) {
    models.Booking.belongsTo(models.User);
    models.Booking.hasOne(models.Link);
  };
  return Booking;
};
