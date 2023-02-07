'use strict';

//render.com options
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'ToDos';

    return queryInterface.bulkInsert(options, [{
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
    options.tableName = 'ToDos';
    return queryInterface.bulkDelete(options, null, {});
  }
};
