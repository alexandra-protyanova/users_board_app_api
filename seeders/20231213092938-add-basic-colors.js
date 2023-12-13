'use strict';

const colorosFromServer = [
  { name: 'Black' },
  { name: 'DeepPink' },
  { name: 'Red' },
  { name: 'Aquamarine' },
  { name: 'Gold' },
  { name: 'YellowGreen' },
  { name: 'Yellow' },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert('colors', colorosFromServer, { transaction });

      await transaction.commit();
    } catch (err) {
      console.log(err);

      await transaction.rollback();
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkDelete(
        'colors', 
        { name: colorosFromServer.map(color => color.name)}, 
        { transaction }
      );

      await transaction.commit();
    } catch (err) {
      console.log(err);

      await transaction.rollback();
    }
  }
};
