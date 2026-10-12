const mongoose = require('mongoose');
const dep_model = require('../model/Department.js');
const emp_model = require('../model/Employee.js');

const emp_form_validation = async (req, res, next)  => {

    const { name, email, department, salary } = req.body;

    if(!name || !email || !department || !salary){
        return res.json({
            message: "All fields are required"
        });
    }

    if(!mongoose.Types.ObjectId.isValid(department)){
        return res.json({
            message: "Something went wrong"
        });
    }

    const email_result = await emp_model.findOne({email});
    if(email_result){
        return res.json({
            message: "Email already exists."
        });
    }

    const department_result = await dep_model.findById(department);
    if(!department_result){
        return res.json({
            message: "Department not found"
        });
    }

    if(salary < 0){
        return res.json({
            message: "Please enter salary"
        });
    } 

    next();
}

module.exports = emp_form_validation;