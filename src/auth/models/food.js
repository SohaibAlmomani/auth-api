"use strict";

const foodModel = (sequelize, DataTypes) =>
  sequelize.define("Food", {
    foodName: {
      type: DataTypes.STRING,
      required: true,
    },
    type: {
      type: DataTypes.ENUM("fruit", "vegetable", "protein"),
      required: true,
    },
    price: {
      type: DataTypes.STRING,
      required: true,
    },
  });

module.exports = foodModel;
