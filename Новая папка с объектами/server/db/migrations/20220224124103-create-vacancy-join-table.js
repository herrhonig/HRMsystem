'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VacancyJoinTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      candidate_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Candidates',
          key: 'id',
        },
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Statuses',
          key: 'id',
        },
      },
      vacancy_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vacancies',
          key: 'id',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VacancyJoinTables');
  }
};