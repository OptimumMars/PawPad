'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
  }, {});
  Pet.associate = function (models) {
    // associations can be defined here
    Pet.belongsTo(models.User, { foreignKey: 'userId', as: 'owner' });

    Pet.hasMany(models.ToDo, { foreignKey: 'petId', onDelete: 'cascade', hooks: true });

    Pet.hasMany(models.Note, { foreignKey: 'petId', onDelete: 'cascade', hooks: true });
  };
  return Pet;
};
