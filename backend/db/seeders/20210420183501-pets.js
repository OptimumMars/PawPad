'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Pets";

    return queryInterface.bulkInsert(options, [{
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
    options.tableName = "Pets";

    return queryInterface.bulkDelete(options, null, {});
  }
};
