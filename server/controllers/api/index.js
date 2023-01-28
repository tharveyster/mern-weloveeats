const router = require('express').Router();
const user = require("./user");

router.use('/user', user);

router.use((req, res) => {
  res.status(404).end();
})

module.exports = router;