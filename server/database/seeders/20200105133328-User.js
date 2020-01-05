"use strict";
const faker = require("faker");

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "admin",
          lastName: "admin",
          username: "admin",
          email: "admin",
          password: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        ...Array.from({ length: 20 }).map(() => ({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          createdAt: new Date(),
          updatedAt: new Date()
        }))
      ],
      {}
    );
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
