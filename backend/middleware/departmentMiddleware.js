const department_model = require('../model/Department.js');

const dep_validation = async (req, res, next) => {
    const name = req.body.name;
    if(!name){
        return res.json({
            message: "Please enter department name"
        });
    }

    const department_result = await department_model.findOne({name});
    if(department_result){
        return res.json({
            message: "Department already exists"
        });
    }

    next();
}

module.exports = dep_validation;