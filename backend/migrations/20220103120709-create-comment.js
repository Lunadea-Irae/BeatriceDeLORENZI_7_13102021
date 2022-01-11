'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content :{
        allowNull : false,
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
     userId:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
          model : 'Users',
          key:'id'
        }
      },
      messageId:{
        allowNull:true,
        type:Sequelize.INTEGER,
        references:{
          model : 'Messages',
          key:'id'
        }
      },
      commentId:{
        allowNull:true,
        type:Sequelize.INTEGER,
        references:{
          model : 'Comments',
          key:'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};