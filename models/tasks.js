'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tasks.hasMany(models.User);
    }
  };
  Tasks.init({
    name: DataTypes.STRING,
    details: DataTypes.STRING,
    date: DataTypes.DATE,
    repetition: DataTypes.BOOLEAN,
    contributors: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};