'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    item: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    checked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    petId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Pet' }
    }
  }, {});
  ToDo.associate = function (models) {
    // associations can be defined here
    ToDo.belongsTo(models.Pet, { foreignKey: 'petId', as: 'todos' });
  };
  return ToDo;
};
