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
      'Users',
      [
        {
          last_name: 'Doe',
          first_name: 'John',
          middle_name: 'Сергеевич',
          email: '123@123.eu',
          phone: '123-123-123-8',
          position: 'Младший грузчик',
          company: 'Microsoft',
          access: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          last_name: 'Джоли',
          first_name: 'Анджелина',
          middle_name: 'Федоровна',
          email: '456"456.com',
          phone: '111-111-111-8',
          position: 'Старший грузчик',
          company: 'Microsoft',
          access: true,
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
     await queryInterface.bulkDelete('Users', null, {});
  }
};
