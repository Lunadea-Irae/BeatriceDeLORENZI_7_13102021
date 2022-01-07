'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('UserMessages', [
    {
      id: 1,
      userId: 1,
      messageId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      userId: 2,
      messageId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      userId: 2,
      messageId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {}),

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
