'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.UserMessages),
      models.User.hasMany(models.Like),
      models.User.hasMany(models.Comment),
      models.User.belongsToMany(models.Hashtag, {through : 'UserHashtag'})
      /*models.User.belongsTo(models.User),
      models.User.hasMany(models.User)*/
    }
  };
  
  User.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    brief: DataTypes.STRING,
    level: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    service: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};