'use strict';

const { faker } = require('@faker-js/faker');

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
      'AboutCandidates',
      [
        {
          candidate_id: 1,
          descr:
            'Любо дорого смотреть. Жил не тужил, бродил ел пил пиво по усам текло да ни капли в рот не попало',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 2,
          descr:
            'Я так часто оставался  один с душой разломанной. Ноги еще могут иди, но идти некуда. Глаза полны печали от того что повидали. Что бы не было бвсегда идет вперед, Его ведет...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 3,
          descr:
            'Я так часто оставался  один с душой разломанной. Ноги еще могут иди, но идти некуда. Глаза полны печали от того что повидали. Что бы не было бвсегда идет вперед, Его ведет...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 4,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 5,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 6,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 7,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 8,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 9,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 10,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 11,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 12,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 13,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 14,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 15,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 16,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 17,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 18,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 19,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 20,
          descr: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 21,
          descr: faker.lorem.text(),
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
    await queryInterface.bulkDelete('AboutCandidates', null, {});
  },
};
