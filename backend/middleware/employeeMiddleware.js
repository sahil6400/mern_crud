const employee_model = require('../model/Employee.js');
const department_model = require('../model/Department.js');

const employee_validation = async (req, res, next) => {
    const { name,email,department,salary } = req.body;
    if(!name || !email || !department || !salary){
        return res.json({
            message: "All fields are required"
        });
    }

    const check_email = await employee_model.findOne({email});
    if(check_email){
        return res.json({
            message: "Email already exists"
        });
    }

    const check_department = await department_model.findById(department);
    if(!check_department){
        return res.json({
            message: "Department not exists"
        });
    }

    if(salary < 0) {
        return res.json({
            message: "Please enter required salary",
            data: salary
        });
    }

    next();
}

module.exports = employee_validation;