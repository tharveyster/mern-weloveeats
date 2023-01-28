const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DownVote extends Model {}

DownVote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    comment_id: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'down_vote',
  }
);

module.exports = DownVote;