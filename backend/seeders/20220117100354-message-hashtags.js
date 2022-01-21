'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('MessageHashtags', [
    {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 18,
      HashtagId: 4
    },{
      id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 19,
      HashtagId: 4
    },{
      id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 20,
      HashtagId: 4
    },{
      id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 19,
      HashtagId: 5
    },{
      id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 17,
      HashtagId: 5
    },{
      id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 17,
      HashtagId: 4
    },{
      id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 6,
      HashtagId: 5
    },{
      id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 6,
      HashtagId: 8
    },{
      id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 6,
      HashtagId: 6
    },{
      id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 8,
      HashtagId: 1
    },{
      id: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 8,
      HashtagId: 5
    },{
      id: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 8,
      HashtagId: 8
    },{
      id: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 16,
      HashtagId: 1
    },{
      id: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 16,
      HashtagId: 3
    },{
      id: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 16,
      HashtagId: 5
    },{
      id: 16,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 1,
      HashtagId: 1
    },{
      id: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 1,
      HashtagId: 5
    },{
      id: 18,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 1,
      HashtagId: 6
    },{
      id: 19,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 15,
      HashtagId: 5
    },{
      id: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 15,
      HashtagId: 7
    },{
      id: 21,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 13,
      HashtagId: 3
    },{
      id: 22,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 13,
      HashtagId: 5
    },{
      id: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 13,
      HashtagId: 8
    },{
      id: 24,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 2,
      HashtagId: 2
    },{
      id: 25,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 2,
      HashtagId: 3
    },{
      id: 26,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 2,
      HashtagId: 5
    },{
      id: 27,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 2,
      HashtagId: 8
    },{
      id: 28,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 3,
      HashtagId: 5
    },{
      id: 29,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 3,
      HashtagId: 6
    },{
      id: 30,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 12,
      HashtagId: 2
    },{
      id: 31,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 9,
      HashtagId: 7
    },{
      id: 32,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 7,
      HashtagId: 2
    },{
      id: 33,
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 7,
      HashtagId: 7
    },
  ], {}),

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('MessageHashtags');

  }
};
