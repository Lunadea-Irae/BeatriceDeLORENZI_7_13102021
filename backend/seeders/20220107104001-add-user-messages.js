'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('UserMessages', [{
    id: 1,
    userId: 1,
    messageId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 2,
    userId: 2,
    messageId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 3,
    userId: 9,
    messageId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 4,
    userId: 3,
    messageId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 5,
    userId: 7,
    messageId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 6,
    userId: 2,
    messageId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 7,
    userId: 1,
    messageId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 8,
    userId: 3,
    messageId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 9,
    userId: 7,
    messageId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 10,
    userId: 9,
    messageId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 11,
    userId: 2,
    messageId: 11,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 12,
    userId: 8,
    messageId: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 13,
    userId: 8,
    messageId: 13,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 14,
    userId: 6,
    messageId: 14,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 15,
    userId: 2,
    messageId: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 16,
    userId: 6,
    messageId: 16,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 17,
    userId: 1,
    messageId: 17,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 18,
    userId: 6,
    messageId: 18,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 19,
    userId: 2,
    messageId: 19,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 20,
    userId: 4,
    messageId: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
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
