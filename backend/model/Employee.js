const mongoose = require('mongoose');

const employee_schema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Departments",
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
}, 
{
    timestamp: true
}

);

module.exports = mongoose.model('Employees', employee_schema);