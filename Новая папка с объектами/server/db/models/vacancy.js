'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Candidate, {
        through: 'VacancyJoinTables',
        foreignKey: 'vacancy_id',
      });
      this.belongsToMany(models.Status, {
        through: 'VacancyJoinTables',
        foreignKey: 'vacancy_id',
      });
      this.belongsToMany(models.User, {
        through: 'VacancyJoinTables',
        foreignKey: 'vacancy_id',
      })
      this.belongsTo(models.StatusVacancy, { foreignKey: 'status_id' });
      this.belongsTo(models.Company, { foreignKey: 'company_id' });
      this.belongsTo(models.Priority, { foreignKey: 'priority_id' });
    }
  }
  Vacancy.init(
    {
      position: DataTypes.STRING,
      company_id: DataTypes.INTEGER,
      money: DataTypes.STRING,
      priority_id: DataTypes.INTEGER,
      quantity: DataTypes.STRING,
      descr: DataTypes.TEXT,
      requirements: DataTypes.STRING,
      conditions: DataTypes.STRING,
      hidden: DataTypes.BOOLEAN,
      status_id: DataTypes.INTEGER,
      deadline: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Vacancy',
    }
  );
  return Vacancy;
};
