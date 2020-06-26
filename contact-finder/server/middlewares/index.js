if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const secret = process.env.JWT_SECRET;

const jwt = require('jsonwebtoken');

const getAuthToken = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'no token, auth denied' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded.user;
        return next();
    } catch (err) {
        return res
            .status(401)
            .json({ msg: 'token invalud, auth denied' });
    }
};

module.exports = getAuthToken;
