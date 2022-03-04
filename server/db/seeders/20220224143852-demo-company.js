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
      'Companies',
      [
        {
          name: 'Яндекс',
          genToken: 'ab123iuyom',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Не Яндекс',
          genToken: '12325п3авкка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Рога и Копыта',
          genToken: 'fg45345346746553',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'HR Бычар',
          genToken: 'аука6г75г6ерк',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Avito',
          genToken: '56784',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Пульсар',
          genToken: '56784',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Microsoft',
          genToken: '56784',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Google',
          genToken: '56784',
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
     await queryInterface.bulkDelete('Companies', null, {});
  },
};
