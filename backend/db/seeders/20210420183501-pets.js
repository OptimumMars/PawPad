'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pets', [{
      id: 1,
      name: 'Jake',
      type: 'cat',
      userId: 1,
    },
    {
      id: 2,
      name: 'Charles',
      type: 'dog',
      userId: 1,
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pets', null, {});
  }
};
