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
          name: 'Fast',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Slow',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Super Fast',
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
