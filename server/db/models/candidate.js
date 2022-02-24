'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Tag, {
        through: 'TagsJoinTables',
        foreignKey: 'candidate_id',
      });
      this.belongsToMany(models.Vacancy, {
        through: 'VacancyJoinTables',
        foreignKey: 'candidate_id',
      });
      this.belongsToMany(models.Status, {
        through: 'VacancyJoinTables',
        foreignKey: 'candidate_id',
      });
    }
  }
  Candidate.init(
    {
      last_name: DataTypes.STRING,
      first_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      position: DataTypes.STRING,
      company: DataTypes.STRING,
      money: DataTypes.STRING,
      birthday_day: DataTypes.STRING,
      birthday_month: DataTypes.STRING,
      birthday_year: DataTypes.STRING,
      birthday: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Candidate',
    }
  );
  return Candidate;
};
