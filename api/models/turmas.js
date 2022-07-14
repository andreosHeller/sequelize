'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      turmas.hasMany(models.matriculas, {
        foreignKey: 'turma_id'
      })
      turmas.belongsTo(models.Pessoas)
      turmas.belongsTo(models.niveis)
    }
  }
  turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'turmas',
  });
  return turmas;
};