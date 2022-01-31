'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('MessageHashtag', [
    {
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 18,
      HashtagId: 4
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 19,
      HashtagId: 4
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 20,
      HashtagId: 4
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 19,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 17,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 17,
      HashtagId: 4
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 6,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 6,
      HashtagId: 8
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 6,
      HashtagId: 6
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 8,
      HashtagId: 1
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 8,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 8,
      HashtagId: 8
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 16,
      HashtagId: 1
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 16,
      HashtagId: 3
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 16,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 1,
      HashtagId: 1
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 1,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 1,
      HashtagId: 6
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 15,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 15,
      HashtagId: 7
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 13,
      HashtagId: 3
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 13,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 13,
      HashtagId: 8
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 2,
      HashtagId: 2
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 2,
      HashtagId: 3
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 2,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 2,
      HashtagId: 8
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 3,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 3,
      HashtagId: 6
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 12,
      HashtagId: 2
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 9,
      HashtagId: 7
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 7,
      HashtagId: 2
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 7,
      HashtagId: 7
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 5,
      HashtagId: 5
    },{
      
      createdAt: new Date(),
      updatedAt: new Date(),
      MessageId: 5,
      HashtagId: 7
    },
  ], {}),

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('MessageHashtag');

  }
};
