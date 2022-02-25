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
      'Candidates',
      [
        {
          last_name: 'Ахмедов',
          first_name: 'Иван',
          middle_name: 'Джонович',
          phone: '12312312312',
          email: '789@789',
          position: 'Super middle junior',
          company: 'Ашан',
          money: '2 000 000$ cash',
          birthday_day: '02',
          birthday_month: '02',
          birthday_year: '1846',
          birthday: 'Еще берздей?',
          photo: 'https://static.tildacdn.com/tild3262-3563-4737-a535-313234363464/imgs_touch.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          last_name: 'Иванов',
          first_name: 'Антон',
          middle_name: 'Вайнахович',
          phone: '1231231231',
          email: '123@789',
          position: 'Senior',
          company: 'Компания',
          money: '2500$',
          birthday_day: '03',
          birthday_month: '03',
          birthday_year: '1946',
          birthday: 'Еще берздей?',
          photo: 'https://static.tildacdn.com/tild3733-3734-4230-a131-666230373938/2018-12-1026583-2.jpg',
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
     await queryInterface.bulkDelete('Candidates', null, {});
  }
};