const dep_model = require('../model/Department.js');

const createDep = async (req, res, next) => {
    
    try{ 
        const department_form = await dep_model.create({
            name: req.body.name,
            description: req.body.description
        });

        res.json({
            message: "Department added successfully",
            data: department_form
        });
    }catch(err){
        next(err);
    }

}

module.exports = { createDep }