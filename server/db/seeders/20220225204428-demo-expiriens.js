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
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 2,
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
          candidate_id: 2,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 3,
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
          candidate_id: 3,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 4,
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
          candidate_id: 4,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 5,
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
          candidate_id: 5,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 6,
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
          candidate_id: 6,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 7,
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
          candidate_id: 7,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 8,
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
          candidate_id: 8,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 9,
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
          candidate_id: 9,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 10,
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
          candidate_id: 10,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 11,
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
          candidate_id: 11,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 12,
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
          candidate_id: 12,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 13,
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
          candidate_id: 13,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 14,
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
          candidate_id: 14,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 15,
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
          candidate_id: 15,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 16,
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
          candidate_id: 16,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 17,
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
          candidate_id: 17,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 18,
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
          candidate_id: 18,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 19,
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
          candidate_id: 19,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 20,
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
          candidate_id: 20,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 21,
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
          candidate_id: 21,
          company_name: 'Yandex',
          start_date: '2007',
          end_date: '2020',
          descr:
            'Работал курьером, ел чужую еду крал у других курьеров деньги крышевал бизнес',
          position: 'middle',
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
