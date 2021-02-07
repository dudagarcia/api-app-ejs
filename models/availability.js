'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Availability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Availability.hasMany(models.User);
    }
  };
  Availability.init({
    userId: DataTypes.INTEGER,
    sunday: DataTypes.STRING,
    monday: DataTypes.STRING,
    tuesday: DataTypes.STRING,
    wednesday: DataTypes.STRING,
    friday: DataTypes.STRING,
    saturday: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Availability',
  });
  return Availability;
};