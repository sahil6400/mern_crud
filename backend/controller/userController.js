const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user_model = require('../model/User.js');

const create_user = async (req, res) => {
    try{
        const user = req.body.user;
        const pass = req.body.pass;
        const unique_pass = await bcrypt.hash(pass, 10);

        const form_data = await user_model.create({
            username: user,
            password: unique_pass
        });

        res.json({
            message: "User created successfully",
            data: form_data
        });

    }catch(err){
        console.error(err);
    }
}

const check_login = async (req, res) => {
    try{
        const username = req.body.user;
        const pass = req.body.pass;

        const user_result = await user_model.findOne({ username });
        const db_pass = user_result.password;

        const compare_pass = await bcrypt.compare(pass, db_pass);
        if(!compare_pass){
            return res.json({
                message: "Password not correct"
            });
        }

        const return_result = {
            "user_id": user_result._id,
            "username": user_result.username,
            "role": user_result.role
        }

        const token = await jwt.sign({
            "user_id": user_result._id,
            "role": user_result.role
        }, process.env.SECURITY_CODE, {
            "expiresIn": "1h"
        });

        res.json({
            message: "Login successfully",
            data: return_result ,
            token: token
        });
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    create_user,
    check_login
}