const router = require("express").Router();
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { Recipe, UpVote, Category } = require("../models");
const Op = Sequelize.Op;

router.get("/count", async (req, res) => {
  const recipeCount = await Recipe.count({
    where: {
      is_new: 0,
    },
  });
  res.send({ recipeCount });
});

router.get("/recent", async (req, res) => {
  const recentData = await Recipe.findAll({
    where: {
      is_new: 0,
      [Sequelize.Op.and]: [
        Sequelize.literal(`upload_date >= NOW() - INTERVAL 90 DAY`),
      ],
    },
    attributes: ["title", "recipepic"],
    logging: console.log,
  });
  const recentRecipes = recentData.map((recentRecipe) =>
    recentRecipe.get({ plain: true })
  );
  res.send(recentRecipes);
});

router.get("/random", async (req, res) => {
  const randomData = await Recipe.findAll({
    order: Sequelize.literal("rand()"),
    limit: 5,
    where: {
      is_new: 0,
    },
    attributes: ["id", "title", "recipepic"],
  });
  const randomRecipes = randomData.map((randomRecipe) =>
    randomRecipe.get({ plain: true })
  );
  res.send(randomRecipes);
});

router.get("/popular", async (req, res) => {
  const popularData = await Recipe.findAll({
    order: [["clicks", "DESC"]],
    limit: 5,
    where: {
      is_new: 0,
    },
    attributes: ["id", "title", "recipepic"],
  });
  const popularRecipes = popularData.map((popularRecipe) =>
    popularRecipe.get({ plain: true })
  );
  res.send(popularRecipes);
});

router.get("/liked", async (req, res) => {
  const mostLikedData = await UpVote.findAll({
    attributes: [
      [sequelize.fn("COUNT", sequelize.col("recipe_id")), "magnitude"],
    ],
    group: "recipe_id",
    order: [["magnitude", "DESC"]],
    limit: 5,
    include: [
      {
        model: Recipe,
        where: {
          is_new: 0,
        },
        attributes: ["id", "title", "recipepic"],
      },
    ],
  });
  const mostLikedRecipes = mostLikedData.map((mostLikedRecipe) =>
    mostLikedRecipe.get({ plain: true })
  );
  res.send(mostLikedRecipes);
});

router.get("/category/:id", async (req, res) => {
  const categoryData = await Category.findByPk(req.params.id, {
    attributes: ["title", "short_title"],
    include: [
      {
        model: Recipe,
        attributes: ["id", "title", "recipepic"],
        where: {
          category_id: req.params.id,
        },
        order: [["title", "ASC"]],
      },
    ],
  });
  if (!categoryData) {
    res.status(404);
    return;
  }
  res.send(categoryData);
});

router.get("/recipe/:id", async (req, res) => {
  const recipeData = await Recipe.findByPk(req.params.id, {
    include: [
      {
        model: Category,
        attributes: ["title", "short_title"],
      },
    ],
  });
  if (!recipeData) {
    res.status(404);
    return;
  }
  res.send(recipeData);
});

router.get("/ingredients/:id", async (req, res) => {
  const recipeId = req.params.id;
  const ingredients = await sequelize.query(
    'SELECT b.amount, b.frac_amount, b.modification, d.unit_id, d.unit_label, d.unit_plural, d.unit_mod, c.label, c.singular, c.plural, b.instructions FROM recipe AS a JOIN recipe_ingredient AS b ON a.id = b.id JOIN ingredient AS c ON b.ingredient_id = c.ingredient_id JOIN unit as d ON b.unit_id = d.unit_id WHERE a.id = ' + recipeId + ' ORDER BY b.recipe_ingredient_id', {
    type: QueryTypes.SELECT
  })
  res.send(ingredients);
});

router.get("/directions/:id", async (req, res) => {
  const recipeId = req.params.id;
  const directions = await sequelize.query(
    'SELECT b.direction FROM recipe AS a JOIN recipe_direction AS b ON a.id = b.id WHERE a.id = ' + recipeId + ' ORDER BY b.recipe_direction_id', {
    type: QueryTypes.SELECT
  })
  res.send(directions);
})

module.exports = router;
