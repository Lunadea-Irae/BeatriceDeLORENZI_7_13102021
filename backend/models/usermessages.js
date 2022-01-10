'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMessages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.UserMessages.belongsTo(models.Message, {
        foreignKey: {
          allowNull: false
        }
      })
      models.UserMessages.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  UserMessages.init({
  }, {
    sequelize,
    modelName: 'UserMessages',
    omitNull : true
  });
  return UserMessages;
};