'use strict';

const { RFC_2822 } = require('moment');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
      'VacancyJoinTables',
      [
        {
          candidate_id: 1,
          status_id: 1,
          vacancy_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 2,
          status_id: 2,
          vacancy_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('VacancyJoinTables', null, {});
  }
};
