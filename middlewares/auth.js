const jwt = require('jsonwebtoken');
const Adim = require('../models/User');
const config = require('../config/config');


const validateToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                message: 'Authorization header is required',
            })
        }

        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                message: 'Invalid Token',
            });
        }

        const payload = jwt.verify(token, config.jwtSecret);
        if (!payload) {
            return res.status(401).json({
                message: 'Invalid Token',
            });
        }

        const adim = await Adim.findByPk(payload.id);
        if (!adim) {
            return res.status(401).json({
                message: 'Error fetching user',
            });
        }

        req.adim=  adim;
        next();
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = validateToken