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
    }
  }
  User.init({
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    position: DataTypes.STRING,
    company: DataTypes.STRING,
    access: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};