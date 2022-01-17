'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Comments', [
    
  ], {}),

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Comments');
    
  }
};
