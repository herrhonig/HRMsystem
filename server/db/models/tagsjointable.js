'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagsJoinTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TagsJoinTable.init(
    {
      candidate_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'TagsJoinTable',
    }
  );
  return TagsJoinTable;
};
