const mongoose = require('mongoose');

const user_model = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "admin"
    }
});

module.exports = mongoose.model('users', user_model);