const router = require('express').Router();
const Recipe = require('../models/Recipe');

router.get('/', async (req, res) => {
  const recipeCount = await Recipe.count({
    where: {
      is_new: 0
    }
  });
  res.send({recipeCount});
})

module.exports = router;