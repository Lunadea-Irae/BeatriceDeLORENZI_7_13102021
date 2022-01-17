'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Hashtags', [
    {
      text : "CHAT",
      createdAt : "",
      updatedAd :""
    }
  ], {}),

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Hashtags');
    
  }
};
