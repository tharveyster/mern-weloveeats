const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weight extends Model {}

Weight.init(
  {
    weight_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight_label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grams: {
      type: DataTypes.DECIMAL(11, 7),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'weight',
  }
  );
  
  module.exports = Weight;
  