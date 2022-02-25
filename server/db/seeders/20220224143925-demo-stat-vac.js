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
      'StatusVacancies',
      [
        {
          statusvac_name: 'Готов',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          statusvac_name: 'Не готов',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          statusvac_name: 'В процессе',
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
     await queryInterface.bulkDelete('StatusVacancies', null, {});
  }
};