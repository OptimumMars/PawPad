'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(480),
      allowNull: false
    },
    petId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Pet' }
    }
  }, {});
  Note.associate = function (models) {
    // associations can be defined here
    Note.belongsTo(models.Pet, { foreignKey: 'petId', as: 'pet' });
  };
  return Note;
};
