'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VacancyJoinTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VacancyJoinTable.init({
    candidate_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    vacancy_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'VacancyJoinTable',
  });
  return VacancyJoinTable;
};