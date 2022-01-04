'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Message.hasMany(models.Like),
      models.Message.hasOne(models.UserMessages),
      models.Message.hasMany(models.Comment),
      models.Message.belongsToMany(models.Hashtag, {through : 'MessageHashtag'})
    }
  };
  
  Message.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    media: DataTypes.STRING,
    mediaSize: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};