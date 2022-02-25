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
      'TagsJoinTables',
      [
        {
          candidate_id: 1,
          tag_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 2,
          tag_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          candidate_id: 1,
          tag_id: 2,
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
     await queryInterface.bulkDelete('TagsJoinTables', null, {});
  }
};
