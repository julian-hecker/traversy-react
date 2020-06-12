const router = require('express').Router();

/**
 * @route   GET api/auth
 * @desc    Get logged in uder
 * @access  Private
 */
router.get('/', (req, res) => {
    res.send('trying to get the user');
});

/**
 * @route   POST api/users
 * @desc    Authenticate and get token
 * @access  Public
 */
router.post('/', (req, res) => {
    res.send('tryna login');
})





module.exports = router;
