'use strict';
const POSTGRES_URI =  process.env.DATABASE_URI || "postgres://localhost:5432/nedalalashqar";
const { Sequelize, DataTypes } = require('sequelize');
let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const food = require('./food.model.js');

module.exports = {
  db: sequelize,
  Food: food(sequelize, DataTypes),
};