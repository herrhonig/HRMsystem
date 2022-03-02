const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Token, Candidate, Vacancy }) {
      // define association here
      this.hasOne(Token, { foreignKey: 'userId' });
      this.belongsToMany(Candidate, {
        through: 'VacancyJoinTables',
        foreignKey: 'user_id',
      });
      this.belongsToMany(Vacancy, {
        through: 'VacancyJoinTables',
        foreignKey: 'user_id',
      });
    }
  }
  User.init(
    {
      last_name: DataTypes.STRING,
      first_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isActivated: DataTypes.BOOLEAN,
      activationLink: DataTypes.STRING,
      phone: DataTypes.STRING,
      position: DataTypes.STRING,
      company: DataTypes.STRING,
      access: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
