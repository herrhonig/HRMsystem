'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
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
  Education.init({
    candidate_id: DataTypes.INTEGER,
    place: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    direction: DataTypes.STRING,
    level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Education',
  });
  return Education;
};