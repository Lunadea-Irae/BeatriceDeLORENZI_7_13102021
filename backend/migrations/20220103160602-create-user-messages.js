'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserMessages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'Users',
          key : 'id'
        }
      },
      messageId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'Messages',
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await sequelize.sync();
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserMessages');
    
  }
};