const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/contact', require('./contact'));
router.use('/users', require('./users'));

module.exports = router;
