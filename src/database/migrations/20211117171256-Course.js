'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('course',{
      id: { 
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primatyKey:true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      area:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      grade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('course')
  }
};
