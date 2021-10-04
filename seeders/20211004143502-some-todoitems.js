"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoitems", [
      {
        name: "Javascript test",
        deadline: "24 Sep 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "React challenge",
        deadline: "1 Oct 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Back end challenge",
        deadline: "8 Oct 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoitems", null, {});
  },
};
