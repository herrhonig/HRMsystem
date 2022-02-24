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
      'Vacancies',
      [
        {
          position: 'Junior -',
          company_id: 1,
          money: '50$',
          priority_id: 1,
          quantity: '3',
          descr:
            'Хотим крутого чувака на позицию Джуниор минус. Но шоб знал не меньше чем сеньёр!',
          requirements: 'Какие-то реквариментс',
          conditions: 'Какой-то кондишнс',
          hidden: false,
          status_id: 1,
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: 'Junior +',
          company_id: 2,
          money: '5000$',
          priority_id: 2,
          quantity: '1',
          descr:
            'Хотим крутого чувака на позицию Джуниор +. ВАЖНО! Его имя и фамилия должны быть Данила Килишов',
          requirements: 'Какие-то реквариментс',
          conditions: 'Какой-то кондишнс',
          hidden: false,
          status_id: 3,
          deadline: new Date(),
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
    await queryInterface.bulkDelete('Vacancies', null, {});
  },
};
