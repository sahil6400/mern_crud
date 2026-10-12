const user_model = require('../model/User.js');
const user_validation = async (req, res, next) => {
    const username = req.body.user;
    const user_result = await user_model.findOne({username});

    if(user_result){
        return res.json({
            message: "Username already exists"
        });
    }

    next();
}

module.exports = user_validation;