'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Notify', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },

    message: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    UserID: {
        type: Sequelize.UUID,
        reference: {
            model: 'Users',
            key: 'id'
        }
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Notify')
  },
};
