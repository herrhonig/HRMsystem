'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vacancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.STRING
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Companies',
          key: 'id',
        },
      },
      money: {
        type: Sequelize.STRING
      },
      priority_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Priorities',
          key: 'id',
        },
      },
      quantity: {
        type: Sequelize.STRING
      },
      descr: {
        type: Sequelize.TEXT
      },
      requirements: {
        type: Sequelize.STRING
      },
      conditions: {
        type: Sequelize.STRING
      },
      hidden: {
        type: Sequelize.BOOLEAN
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'StatusVacancies',
          key: 'id',
        },  
      },
      deadline: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Vacancies');
  }
};