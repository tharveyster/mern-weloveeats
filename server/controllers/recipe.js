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

  const recipe = recipeData.get({ plain: true });
  const recipeId = recipe.id;

  Recipe.update(
    { clicks: recipe.clicks + 1 },
    { where: { id: recipeId } }
  )
});

router.get("/ingredients/:id", async (req, res) => {
  const recipeId = req.params.id;
  const ingredients = await sequelize.query(
    "SELECT b.amount, b.frac_amount, b.modification, d.unit_id, d.unit_label, d.unit_plural, d.unit_mod, c.label, c.singular, c.plural, b.instructions FROM recipe AS a JOIN recipe_ingredient AS b ON a.id = b.id JOIN ingredient AS c ON b.ingredient_id = c.ingredient_id JOIN unit as d ON b.unit_id = d.unit_id WHERE a.id = " +
      recipeId +
      " ORDER BY b.recipe_ingredient_id",
    {
      type: QueryTypes.SELECT,
    }
  );
  res.send(ingredients);
});

router.get("/directions/:id", async (req, res) => {
  const recipeId = req.params.id;
  const directions = await sequelize.query(
    "SELECT b.direction FROM recipe AS a JOIN recipe_direction AS b ON a.id = b.id WHERE a.id = " +
      recipeId +
      " ORDER BY b.recipe_direction_id",
    {
      type: QueryTypes.SELECT,
    }
  );
  res.send(directions);
});

router.get("/nutrition/:id", async (req, res) => {
  const recipeId = req.params.id;
  const nutritionData = await sequelize.query(
    "SELECT servings ,ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.energ_kcal) * b.disposed) / a.servings)) AS calories, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.protein_g) * b.disposed) / a.servings) * 2) * 0.5 AS protein, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.protein_g) * b.disposed) / a.servings) / 0.5) AS protein_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.lipid_tot_g) * b.disposed) / a.servings) * 2) * 0.5 AS total_fat, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.lipid_tot_g) * b.disposed) / a.servings) / 0.78) AS total_fat_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.lipid_tot_g) * b.disposed) / a.servings) * 9) AS fat_calories, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.carbohydrt_g) * b.disposed) / a.servings) * 2) * 0.5 AS carbs, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.carbohydrt_g) * b.disposed) / a.servings) / 2.75) AS carbs_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.fiber_td_g) * b.disposed) / a.servings) * 2) * 0.5 AS fiber, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.fiber_td_g) * b.disposed) / a.servings) / 0.28) AS fiber_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.sugar_tot_g) * b.disposed) / a.servings) * 2) * 0.5 AS sugar, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.calcium_mg) * b.disposed) / a.servings)) AS calcium, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.calcium_mg) * b.disposed) / a.servings) / 13) AS calcium_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.iron_mg) * b.disposed) / a.servings)) AS iron, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.iron_mg) * b.disposed) / a.servings) / 0.18) AS iron_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.magnesium_mg) * b.disposed) / a.servings)) AS magnesium, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.magnesium_mg) * b.disposed) / a.servings) / 4.2) AS magnesium_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.phosphorus_mg) * b.disposed) / a.servings)) AS phosphorus, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.phosphorus_mg) * b.disposed) / a.servings) / 12.5) AS phosphorus_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.potassium_mg) * b.disposed) / a.servings)) AS potassium, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.potassium_mg) * b.disposed) / a.servings) / 47) AS potassium_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.sodium_mg) * b.disposed) / a.servings)) AS sodium, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.sodium_mg) * b.disposed) / a.servings) / 23) AS sodium_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.zinc_mg) * b.disposed) / a.servings)) AS zinc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.zinc_mg) * b.disposed) / a.servings) / 0.11) AS zinc_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.copper_mg) * b.disposed) / a.servings)) AS copper, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.copper_mg) * b.disposed) / a.servings) / 0.009) AS copper_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.manganese_mg) * b.disposed) / a.servings)) AS manganese, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.manganese_mg) * b.disposed) / a.servings) / 0.023) AS manganese_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.selenium_mcg) * b.disposed) / a.servings)) AS selenium, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.selenium_mcg) * b.disposed) / a.servings) / 0.55) AS selenium_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_c_mg) * b.disposed) / a.servings)) AS vitamin_c, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_c_mg) * b.disposed) / a.servings) / 0.9) AS vitamin_c_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.thiamin_mg) * b.disposed) / a.servings)) AS thiamin, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.thiamin_mg) * b.disposed) / a.servings) / 0.012) AS thiamin_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.riboflavin_mg) * b.disposed) / a.servings)) AS riboflavin, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.riboflavin_mg) * b.disposed) / a.servings) / 0.013) AS riboflavin_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.niacin_mg) * b.disposed) / a.servings)) AS niacin, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.niacin_mg) * b.disposed) / a.servings) / 0.16) AS niacin_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.panto_acid_mg) * b.disposed) / a.servings)) AS panto_acid, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.panto_acid_mg) * b.disposed) / a.servings) / 0.05) AS panto_acid_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_b6_mg) * b.disposed) / a.servings)) AS vit_b6, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_b6_mg) * b.disposed) / a.servings) / 0.017) AS vit_b6_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.folate_tot_ug) * b.disposed) / a.servings)) AS folate, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.folate_tot_ug) * b.disposed) / a.servings) / 4) AS folate_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.choline_tot_mg) * b.disposed) / a.servings)) AS choline, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.choline_tot_mg) * b.disposed) / a.servings) / 5.5) AS choline_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_b12_ug) * b.disposed) / a.servings)) AS vit_b12, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_b12_ug) * b.disposed) / a.servings) / 0.024) AS vit_b12_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_a_rae) * b.disposed) / a.servings)) AS vitamin_a, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_a_rae) * b.disposed) / a.servings) / 9) AS vitamin_a_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_e_mg) * b.disposed) / a.servings)) AS vitamin_e, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_e_mg) * b.disposed) / a.servings) / 0.15) AS vitamin_e_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_d_ug) * b.disposed) / a.servings)) AS vitamin_d, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_d_ug) * b.disposed) / a.servings) / 0.2) AS vitamin_d_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_k_ug) * b.disposed) / a.servings)) AS vitamin_k, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.vit_k_ug) * b.disposed) / a.servings) / 1.2) AS vitamin_k_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.fa_sat_g) * b.disposed) / a.servings) * 2) * 0.5 AS sat_fat, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.fa_sat_g) * b.disposed) / a.servings) / 0.2) AS sat_fat_perc, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.fa_mono_g) * b.disposed) / a.servings) * 2) * 0.5 AS mono_fat, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.fa_poly_g) * b.disposed) / a.servings) * 2) * 0.5 AS poly_fat, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.cholestrl_mg) * b.disposed) / a.servings)) AS cholesterol, ROUND(SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.cholestrl_mg) * b.disposed) / a.servings) / 3 ) AS cholesterol_perc FROM recipe AS a JOIN recipe_ingredient AS b ON a.id = b.id JOIN ingredient AS c ON b.ingredient_id = c.ingredient_id JOIN weight AS d ON b.ingredient_id = d.ingredient_id AND b.unit_id = d.unit_id WHERE a.id = " +
      recipeId +
      "",
    {
      type: QueryTypes.SELECT,
    }
  );

  const nutrition = nutritionData[0];
  res.send(nutrition);
});

router.get("/wwsp/:id", async (req, res) => {
  const recipeId = req.params.id;
  const wwspData = await sequelize.query(
    "SELECT servings ,ROUND((SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.energ_kcal) * b.disposed) / a.servings) * 0.0305) + (SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.sugar_tot_g) * b.disposed) / a.servings) * 0.12) + (SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.fa_sat_g) * b.disposed) / a.servings) * 0.275) - (SUM(((((b.amount + b.frac_amount) * (d.grams * 0.01)) * c.protein_g) * b.disposed) / a.servings) * 0.098)) AS wwsp FROM recipe AS a JOIN recipe_ingredient AS b ON a.id = b.id JOIN ingredient AS c ON b.ingredient_id = c.ingredient_id JOIN weight AS d ON b.ingredient_id = d.ingredient_id AND b.unit_id = d.unit_id WHERE a.id = " +
      recipeId +
      "",
    {
      type: QueryTypes.SELECT,
    }
  );

  const wwsp = wwspData[0];
  res.send(wwsp);
});

module.exports = router;
