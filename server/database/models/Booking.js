("use strict");
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import("sequelize/types/lib/data-types")} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "booking",
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
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};
