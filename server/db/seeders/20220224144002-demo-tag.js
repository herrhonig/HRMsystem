'use strict';

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
      'Tags',
      [
        {
          tag_name: 'Классный',
          color: 'error',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'Веселый',
          color: 'primary',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'Норм пообщались',
          color: 'success',
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
     await queryInterface.bulkDelete('Tags', null, {});
  }
};
