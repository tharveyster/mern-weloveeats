const router = require('express').Router();
const recipe = require('./recipe');
const api = require('./api');

router.use('/', recipe);
router.use('/api', api);

router.use((req, res) => {
  res.status(404).end();
})

module.exports = router;