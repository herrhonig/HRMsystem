'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Candidate, {
        through: 'VacancyJoinTables',
        foreignKey: 'status_id',
      });
      this.belongsToMany(models.Vacancy, {
        through: 'VacancyJoinTables',
        foreignKey: 'status_id',
      });
    }
  }
  Status.init(
    {
      status_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Status',
    }
  );
  return Status;
};
