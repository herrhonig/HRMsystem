'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Candidate, { foreignKey: 'candidate_id' });
    }
  }
  Experience.init({
    candidate_id: DataTypes.INTEGER,
    company_name: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    descr: DataTypes.TEXT,
    position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Experience',
  });
  return Experience;
};