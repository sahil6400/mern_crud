const mongoose = require('mongoose');

const department_model = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{
    timestamp: true
}

);

module.exports = mongoose.model('Departments', department_model);