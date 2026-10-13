const jwt = require('jsonwebtoken');

const auth_validation = async (req, res, next) => {

    try{

        const auth_headers = req.headers.authorization;
        if(!auth_headers){
            return res.json({
                message: "Token not found"
            });
        }

        const token = auth_headers.split(' ')[1];
        if(!token){
            return res.json({
                message: "Invalid token"
            });
        }

        const decoded = await jwt.verify(token, process.env.SECURITY_CODE);

        req.user = decoded;

        next();
    }catch(err){
        console.error(err);
        res.json({
            message: "Something went wrong",
            data: err
        });
    }

}

module.exports = auth_validation;