const router = require('express').Router();
const { Sequelize } = require('sequelize');
const Recipe = require('../models/Recipe');
const Op = Sequelize.Op;

router.get('/count', async (req, res) => {
  const recipeCount = await Recipe.count({
    where: {
      is_new: 0
    }
  });
  res.send({recipeCount});
});

router.get('/recent', async (req, res) => {
  const recentData = await Recipe.findAll({
    where: {
      is_new: 0,
      [Sequelize.Op.and]: [Sequelize.literal(`upload_date >= NOW() - INTERVAL 90 DAY`)]
    },
    attributes: ['title', 'recipepic'],
    logging: console.log,
  });
  const recentRecipes = recentData.map((recentRecipe) => recentRecipe.get({ plain: true }));
  res.send(recentRecipes);
});

module.exports = router;