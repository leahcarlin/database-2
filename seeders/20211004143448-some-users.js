"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Leah Carlin",
        email: "leahcarlin@gmail.com",
        phone: 82812530,
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Barack Obama",
        email: "presobama@gmail.com",
        phone: 23561230,
        password: "usa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kim Kardashian",
        email: "kimk@gmail.com",
        phone: 55566624,
        password: "fame",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
