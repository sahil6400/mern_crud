const jsw = require('jsonwebtoken');

const auth_validation = async (req, res, next) => {

    const headers = req.headers.Authentication;

    return res.json({
        message: "Token not found",
        data: headers
    });

    next();
}

module.exports = auth_validation;