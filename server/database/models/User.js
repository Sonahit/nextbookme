const { encode, decode } = require("../../utils/endecoding");
("use strict");

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import("sequelize/types/lib/data-types")} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [2, Number.MAX_SAFE_INTEGER],
          not: /\s/g
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, Number.MAX_SAFE_INTEGER]
        },
        get() {
          return decode(this.getDataValue("password"));
        },
        set(value) {
          this.setDataValue("password", encode(value));
        }
      }
    },
    {}
  );
  /**
   * @param {Object.<string, import('../index').Model>} models
   */
  User.associate = function(models) {
    models.User.hasOne(models.Admin);
    models.User.hasMany(models.Booking);
    models.User.hasOne(models.Config);
  };
  return User;
};
