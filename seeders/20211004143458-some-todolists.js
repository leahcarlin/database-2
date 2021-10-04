"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todolists", [
      {
        name: "week 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "week 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "week 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todolists", null, {});
  },
};
