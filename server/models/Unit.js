const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Unit extends Model {}

Unit.init(
  {
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    unit_label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit_plural: {
      type: DataTypes.STRING,
    },
    unit_mod: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
    sort: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit',
  }
  );
  
  module.exports = Unit;
  