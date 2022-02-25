'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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
      'Education',
      [
        {
          candidate_id: 1,
          place: 'МГАТИУФСИН',
          start_date: '1992',
          end_date: '2010',
          direction: 'Факультет новых башмаков',
          level: 'Магистр',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 1,
          place: 'МГУ',
          start_date: '2020',
          end_date: 'по наст. вр.',
          direction: 'Факультет лысых людей',
          level: 'Бакалавр',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 2,
          place: 'РУДН',
          start_date: '2022',
          end_date: '2026',
          direction: 'Факультет рассовой сегригации',
          level: 'Новичек',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Education', null, {});
  },
};
