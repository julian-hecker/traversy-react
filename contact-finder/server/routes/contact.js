const router = require('express').Router(),
    { check, validationResult } = require('express-validator');
const User = require('../models/User'),
    Contact = require('../models/Contact'),
    getAuth = require('../middlewares');

/**
 * @route   GET api/contacts
 * @desc    get all logged in user's contacts
 * @access  Private
 */
router.get('/', getAuth, async (req, res) => {
    try {
        const contacts = await Contact.find({
            user: req.user.id,
        }).sort({ date: -1 });
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

/**
 * @route   POST api/contacts/:id
 * @desc    Add a contact
 * @access  Private
 */
router.post(
    '/',
    [getAuth, check('name', 'name is required').notEmpty()],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone } = req.body;
        try {
            const newContact = await Contact.create({
                name,
                email,
                phone,
                user: req.user.id,
            });
            const contact = await newContact.save();
            res.json(contact);
        } catch (err) {
            console.log(err);
            res.status(500).send('server error');
        }
    },
);

/**
 * @route   PUT api/contacts/:id
 * @desc    Update a contact
 * @access  Private
 */
router.put('/:id', getAuth, async (req, res) => {
    const contactId = req.params.id;
    const { name, email, phone } = req.body;

    // see if this will work even if value is undef
    const contactFields = { name, email, phone };

    try {
        let contact = await Contact.findById(contactId);
        if (!contact) {
            res.status(404).json({ msg: 'contact not found' });
        }
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'unauthorized' });
        }
        contact = await Contact.findByIdAndUpdate(
            contactId,
            { $set: contactFields },
            { new: true },
        );
        res.json(contact);
    } catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
});

/**
 * @route   DELETE api/contacts/:id
 * @desc    Delete a contact
 * @access  Private
 */
router.delete('/:id', getAuth, async (req, res) => {
    const contactId = req.params.id;

    try {
        let contact = await Contact.findById(contactId);
        if (!contact) {
            res.status(404).json({ msg: 'contact not found' });
        }
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'unauthorized' });
        }
        await Contact.findByIdAndDelete(contactId);
        res.json({ msg: 'contact deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
});

module.exports = router;
