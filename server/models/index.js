const Recipe = require('./Recipe');
const UpVote = require('./UpVotes');

Recipe.hasMany(UpVote, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE'
});

UpVote.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE'
});

module.exports = { Recipe, UpVote };