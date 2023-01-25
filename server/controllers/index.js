const router = require('express').Router();
const recipe = require('./recipe');

router.use('/', recipe);

router.use((req, res) => {
  res.status(404).end();
})

module.exports = router;