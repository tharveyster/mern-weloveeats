const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeDirection extends Model {}

RecipeDirection.init(
  {
    recipe_direction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    direction: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe_direction',
  }
  );
  
  module.exports = RecipeDirection;
  