const emp_model = require('../model/Employee.js');

const create_Emp = async (req, res) => {
    try{

        const emp_form_data = await emp_model.create({
            name: req.body.name,
            email: req.body.email,
            department: req.body.department,
            salary: req.body.salary
        });

        res.json({
            message: "Employee uploaded successfully",
            data: emp_form_data
        });
    }catch(err){
        console.error(err);
    }
}

const getAllEmp = async (req, res) => {
    try{
        const all_emp = await emp_model.find().populate("department");

        res.json({
            message: "All employees",
            data: all_emp
        });
    }catch(err){
        console.error(err);
    }
}

const singleEmpById = async (req, res) => {
    
    try{
        const id = req.params.id;
        const model_result = await emp_model.findById(id);

        res.json({
            message: "Single data found",
            data: model_result
        });
    }catch(err){
        console.error(err);
    }

}

const updateEmp = async (req, res) => {
    
    try{
        const id = req.params.id;
        const result = await emp_model.findByIdAndUpdate(id,
            {
                name: req.body.name,
                email: req.body.email,
                department: req.body.department,
                salary: req.body.salary
            },
            {
                new: true,
                runValidators: true
            }
        );

        res.json({
            message: "Employee Updated",
            data: result
        });
    }catch(err){
        console.error(err);
    }

}

const deleteEmp = async (req, res) => {
    
    try{
        const id = req.params.id;
        const result = await emp_model.findByIdAndDelete(id);
        if(!result){
            return res.json({
                message: "Something went wrong",
                data: result
            });
        }

        res.json({
            message: "Employee deleted successfully",
            status: true
        });
        
    }catch(err){ 
        console.error(err);
    }

}

module.exports = { create_Emp, getAllEmp, singleEmpById, updateEmp, deleteEmp }