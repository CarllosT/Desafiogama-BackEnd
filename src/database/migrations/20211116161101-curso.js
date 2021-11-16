'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cursos',{
      id: { 
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primatyKey:true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      area:{
        type: Sequelize.STRING,
        allowNull: false,
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
