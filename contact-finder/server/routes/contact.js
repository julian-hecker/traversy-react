const router = require('express').Router();

/**
 * @route   GET api/contacts
 * @desc    get all logged in users contacts
 * @access  Private
 */
router.post('/', (req, res) => {
    res.send('tryna get contacts');
});

/**
 * @route   POST api/contacts/:id
 * @desc    Update a contact
 * @access  Private
 */
router.put('/:id', (req, res) => {
    res.send('tryna add contact');
});


/**
 * @route   DELETE api/contacts/:id
 * @desc    Delete a contact
 * @access  Private
 */
router.delete('/:id', (req, res) => {
    res.send('tryna delete');
})




module.exports = router;
