'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Company, {
        through: 'AgentJoinTables',
        foreignKey: 'company_id',
      });
      this.belongsToMany(models.Company, {
        through: 'AgentJoinTables',
        foreignKey: 'agent_id',
      });
      this.hasMany(models.Vacancy, { foreignKey: 'company_id' });
    }
  }
  Company.init(
    {
      name: DataTypes.STRING,
      genToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Company',
    }
  );
  return Company;
};
