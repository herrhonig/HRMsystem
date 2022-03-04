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
      'Priorities',
      [
        {
          name: 'Срочно',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'до 16.07',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ASAP',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Не горит',
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
     await queryInterface.bulkDelete('Priorities', null, {});
  },
};
