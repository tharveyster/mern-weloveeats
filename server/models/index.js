const Recipe = require('./Recipe');
const UpVote = require('./UpVotes');
const Category = require("./Category");

Recipe.hasMany(UpVote, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE'
});

UpVote.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE'
});

Category.hasMany(Recipe, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

Recipe.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

module.exports = { Recipe, UpVote, Category };