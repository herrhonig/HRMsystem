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
          color: 'red',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'Тег ldf',
          color: 'green',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'Тег 3',
          color: 'blue',
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
