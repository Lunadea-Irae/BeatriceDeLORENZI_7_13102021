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
    },
    {
      id: 5,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 7,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 8,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 9,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 10,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 11,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 12,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 13,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 14,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 15,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 16,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 17,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 18,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 19,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 20,
      userId: 3,
      messageId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {}),

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('UserMessages');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
