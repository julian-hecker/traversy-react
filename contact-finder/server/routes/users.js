if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const router = require('express').Router(),
    bcrypt = require('bcrypt'),
    { check, validationResult } = require('express-validator'),
    jwt = require('jsonwebtoken');

const User = require('../models/User');

/**
 * @route   POST api/users
 * @desc    Register a user
 * @access  Public
 */
router.post(
    '/',
    [
        check('name', 'Please enter your name').notEmpty(),
        check('email', ' Please enter your email').isEmail().notEmpty(),
        check(
            'password',
            'Please enter a password with 8 or more characters',
        ).isLength({ min: 8 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array });
        }
        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res
                    .status(400)
                    .json({ msg: 'user already exists' });
            } else {
                user = new User({
                    name,
                    email,
                    password,
                });
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);
                await user.save();

                const payload = {
                    user: {
                        id: user.id,
                    },
                };
                const secret = process.env.JWT_SECRET;
                jwt.sign(
                    payload,
                    secret,
                    {
                        expiresIn: 36000,
                    },
                    (err, token) => {
                        if (err) throw err;
                        res.json({token});
                    },
                );
            }
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    },
);

module.exports = router;
