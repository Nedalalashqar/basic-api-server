'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('food', {
  nameFood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeFood: {
    type: DataTypes.STRING,
  }
});

module.exports = Food;