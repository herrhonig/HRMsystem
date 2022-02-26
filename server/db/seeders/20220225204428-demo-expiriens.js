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
      'Experiences',
      [
        {
          candidate_id: 1,
          company_name: 'Кулибин и партнеры',
          start_date: '1999',
          end_date: '2007',
          descr:
            'В мои обязанности входило поливать цветы и гладить котиков. Лучшая работа в моей жизни',
          position: 'Старший помошник',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 1,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Hf,jnfk rehmthjv, tk xe;e. tle, rhfk e lheub[ rehmthjd ltymub, rhsitdfk ,bpytc',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 2,
          company_name: 'Быки и коровы',
          start_date: '2021',
          end_date: '2022',
          descr:
            'Носил Леше чай, задавал тупые вопросы, просил его что-нибудь объяснить. Он терпел и объяснял. Леша-хороший',
          position: 'Top',
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
    await queryInterface.bulkDelete('Experiences', null, {});
  },
};
