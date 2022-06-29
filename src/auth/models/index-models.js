"use strict";

require("dotenv").config();

const { Sequelize, DataTypes } = require("sequelize");
const Collection = require('./data-collection');
const foodModel = require('./food');

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite:memory : " : process.env.DATABASE_URL;

const sequelizeOptions = process.env.NODE_ENV === "production"
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
  : {};

const sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const foodTable = foodModel(sequelize, DataTypes);


module.exports = {
  sequelize,
  DataTypes,
  food: new Collection(foodTable),

};
