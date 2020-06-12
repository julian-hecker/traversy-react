const router = require('express').Router();


/**
 * @route   POST api/users
 * @desc    Register a user
 * @access  Public
 */
router.post('/', (req, res) => {
    res.send('trying to register user but you\'re not letting me');
})





module.exports = router;
