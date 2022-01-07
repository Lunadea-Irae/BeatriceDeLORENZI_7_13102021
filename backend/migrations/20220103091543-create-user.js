'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique : true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique : true
      },
      showEmail: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false,
        unique : true
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      brief: {
        type: Sequelize.STRING,
        allowNull:true
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull:true
      },
      birthday: {
        type: Sequelize.DATEONLY,
        allowNull:true
      },
      service: {
        type: Sequelize.STRING,
        allowNull:true
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};