'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('MessageHashtags', [
    
  ], {}),

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('MessageHashtags');
    
  }
};
