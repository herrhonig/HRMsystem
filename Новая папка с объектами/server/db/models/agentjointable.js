'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgentJoinTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgentJoinTable.init({
    company_id: DataTypes.INTEGER,
    agent_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AgentJoinTable',
  });
  return AgentJoinTable;
};