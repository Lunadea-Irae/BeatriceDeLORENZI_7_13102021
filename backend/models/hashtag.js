'use strict';
const {
  Model
} = require('sequelize');
const message = require('./message');
module.exports = (sequelize, DataTypes) => {
  class Hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Hashtag.belongsToMany(models.User, { through: 'UserHashtag'}),
        models.Hashtag.belongsToMany(models.Message, { through: 'MessageHashtag'  })
    }
  };

  Hashtag.init({
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hashtag',
  });
  //sequelize.sync()
  return Hashtag;
};