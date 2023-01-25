const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    keywords: {
      type: DataTypes.TEXT,
    },
    clicks: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipepic: {
      type: DataTypes.STRING,
      defaultValue: 'placesetting.png',
    },
    is_there_two: {
      type: DataTypes.STRING,
      defaultValue: 'none',
    },
    recipe2ndpic: {
      type: DataTypes.STRING,
      defaultValue: 'blank.jpg',
    },
    servings: {
      type: DataTypes.INTEGER,
    },
    upload_date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    is_new: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
    },
    contributor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
  );
  
  module.exports = Recipe;
  