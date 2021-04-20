'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ToDos', [{
      item: 'Brush his coat',
      checked: false,
      petId: 1
    },
    {
      item: 'Give him flea medicine',
      checked: false,
      petId: 1
    },
    {
      item: 'Morning Walk',
      checked: false,
      petId: 2
    },
    {
      item: 'Give him treats',
      checked: false,
      petId: 2
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ToDos', null, {});
  }
};
