'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Hashtags', [
    { id: 1, text: "CHAT", createdAt: new Date(), updatedAt: new Date() },
    { id: 2, text: "VOYAGE", createdAt: new Date(), updatedAt: new Date() },
    { id: 3, text: "NOËL", createdAt: new Date(), updatedAt: new Date() },
    { id: 4, text: "BONNE ANNÉE", createdAt: new Date(), updatedAt: new Date() },
    { id: 5, text: "HUMOUR", createdAt: new Date(), updatedAt: new Date() },
    { id: 6, text: "POLITIQUE", createdAt: new Date(), updatedAt: new Date() },
    { id: 7, text: "CORPORATE", createdAt: new Date(), updatedAt: new Date() },
    { id: 8, text: "FILMS", createdAt: new Date(), updatedAt: new Date() }

  ], {}),

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Hashtags');

  }
};
