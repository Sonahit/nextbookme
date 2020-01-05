const Sequelize = require("./index").Sequelize;
const Model = require("./index").model;
const { encode, decode } = require("../utils/endecoding");
class User extends Model {}

User.init(
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, Number.MAX_SAFE_INTEGER],
        not: /\s/g
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
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
  {
    sequelize,
    modelName: "user"
  }
);
