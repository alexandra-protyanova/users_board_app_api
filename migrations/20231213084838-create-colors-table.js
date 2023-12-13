'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('colors', { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          unique: true,
        },
      },
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('colors');
  }
};
