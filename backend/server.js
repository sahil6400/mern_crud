require('dotenv').config();

const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());
const emp_model = require('./model/Employee.js');

let emp_id = 1;

let employees = [
    {
        "id": 1,
        "name": "Sadda",
        "email": "sahil@gmail.com",
        "department": "IT",
        "salary": 100000
    },
    {
        "id": 2,
        "name": "Sadda",
        "email": "sahil@gmail.com",
        "department": "IT",
        "salary": 100000
    },
    {
        "id": 3,
        "name": "Sadda",
        "email": "sahil@gmail.com",
        "department": "IT",
        "salary": 100000
    },
    {
        "id": 4,
        "name": "Sadda",
        "email": "sahil@gmail.com",
        "department": "IT",
        "salary": 100000
    }
];

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected')).catch(error => console.log(error));

app.get('/', (req, res) => { 
    res.json({
        message: "Backend is running"
    });
});

app.post('/api/employee', async (req, res) => {
    
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
    
});

// app.post('/api/employee', (req, res) => {
//     const {name, email, department, salary} = req.body;
    
//     const arr_data = {
//         "id": emp_id++,
//         "name": name,
//         "email": email,
//         "department": department,
//         "salary": salary
//     }
       
//     employees.push(arr_data);

//     res.status(201).json({
//         message: "Data is submitted successfully",
//         data: employees
//     });

// });

app.get('/api/employee', async (req, res) => {

    try{
        const all_emp = await emp_model.find();

        res.json({
            message: "All employees",
            data: all_emp
        });
    }catch(err){
        console.error(err);
    }

    // const all_data = employees;
    // res.status(200).json({
    //     message: "Data fetched successfully",
    //     data: all_data
    // });
});

app.get('/api/employee/:id', async (req, res) => {
    const id = req.params.id;
    const model_result = await emp_model.findById(id);

    res.json({
        message: "Single data found",
        data: model_result
    });

    // const urlID = Number(req.params.id);
    // const result = employees.find(emp => emp.id == urlID);

    // if(!result){
    //     return res.status(404).json({
    //         message: "Data not found",
    //         data: result
    //     });
    // }

    // res.json({
    //     message: 'Single user fected successfully',
    //     data: result
    // });

});

app.put('/api/employee/:id', async (req, res) => {

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
    


    // const url_id = Number(req.params.id);
    // const {name, email, department, salary} = req.body;
    
    // const result = employees.find(emp => emp.id === url_id);
    // if(!result){
    //     return res.status(404).json({
    //         message: "Data not found",
    //         data: result
    //     });
    // }

    // result.name = name;
    // result.email = email;
    // result.department = department;
    // result.salary = salary;

    // res.json({
    //     message: "Employee updated successfully",
    //     final_data: result,
    //     all_data: employees
    // });
});

app.delete('/api/employee/:id', async (req, res) => {
    
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
    

    // const url_id = Number(req.params.id);
    // const result = employees.findIndex(emp => emp.id === url_id);
    // if(result === -1){
    //     return res.status(404).json({
    //         message: "Data not found.",
    //         data: result
    //     });
    // }

    // const removed_data = employees.splice(result, 1);

    // res.json({
    //     message: "Employee deleted successfully",
    //     data: employees,
    //     removed_data: removed_data
    // });
});

app.listen(PORT, () => {
    console.log(`Mern is running on port ${PORT}`);
});