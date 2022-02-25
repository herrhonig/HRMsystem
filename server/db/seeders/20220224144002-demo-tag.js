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
          tag_name: 'Тег один',
          color: 'error',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'Тег ldf',
          color: 'primary',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'Тег 3',
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
