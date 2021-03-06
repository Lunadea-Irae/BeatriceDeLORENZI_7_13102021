'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.Message, {
        foreignKey: {
          allowNull: true
        }
      }),
      models.Comment.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      }),
      models.Comment.hasMany(models.Like),
      models.Comment.hasMany(models.Comment),
      models.Comment.belongsTo(models.Comment, {
        foreignKey: {
          allowNull: true
        }
      })
    }
  };
  Comment.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};