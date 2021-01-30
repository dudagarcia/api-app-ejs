'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Section);
      User.hasMany(models.Role);
    }
  };
  User.init({
    name: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.BIGINT(11),
    sectionId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
    photo: DataTypes.BLOB('long'),
    emailCode: DataTypes.BIGINT(6),
    admin: DataTypes.BOOLEAN, 
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};