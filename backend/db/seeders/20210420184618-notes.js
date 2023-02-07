'use strict';

//render.com options
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Notes';

    return queryInterface.bulkInsert(options, [
      {
        title: 'He Pranks',
        content: 'Jake is a goofy boy, but he will try to prank you just for fun',
        petId: 1
      },
      {
        title: 'Die Hard',
        content: 'Die Hard is his favorite movie. If you need a break, put it on for him. He will quote it all day though.',
        petId: 1
      },
      {
        title: 'Master Chef',
        content: 'If you leave him alone in the kitchen he might make a mess. He thinks he can cook.',
        petId: 2
      },
      {
        title: 'Needy for attention',
        content: "He won't let you out of his sight. He needs attention constantly, and will demand approval.",
        petId: 2
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Notes'

    return queryInterface.bulkDelete(options, null, {});
  }
};
