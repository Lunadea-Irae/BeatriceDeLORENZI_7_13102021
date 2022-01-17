'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Likes', [
    
  ], {}),

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Likes');
    
  }
};
