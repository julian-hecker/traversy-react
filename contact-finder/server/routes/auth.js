const router = require('express').Router(),
    bcrypt = require('bcrypt'),
    { check, validationResult } = require('express-validator'),
    jwt = require('jsonwebtoken');

const User = require('../models/User'), getAuth = require('../middlewares');

/**
 * @route   GET api/auth
 * @desc    Get logged in uder
 * @access  Private
 */
router.get('/', getAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

/**
 * @route   POST api/users
 * @desc    Authenticate and get token
 * @access  Public
 */
router.post(
    '/',
    [
        check('email', 'Please enter your email').isEmail(),
        check('password', 'Please enter your password').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });

            if (!user) {
                return res
                    .status(400)
                    .json({ msg: 'invalid credentials' });
            } else {
                const isMatch = await bcrypt.compare(
                    password,
                    user.password,
                );

                if (!isMatch) {
                    return res
                        .status(400)
                        .json({ msg: 'invalid credentials' });
                } else {
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
                            res.json({ token });
                        },
                    );
                }
            }
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    },
);

module.exports = router;
