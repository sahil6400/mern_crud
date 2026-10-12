const user_model = require('../model/User.js');
const login_validation = async (req, res, next) => {
    const username = req.body.user;
    const user_result = await user_model.findOne({username});

    if(!user_result){
        return res.json({
            message: "Username not exists"
        });
    }

    next();
}

module.exports = login_validation;