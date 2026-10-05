const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());

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

app.get('/', (req, res) => {
    res.json({
        message: "Backend is running"
    });
});

app.post('/api/employee', (req, res) => {
    const {name, email, department, salary} = req.body;
    
    const arr_data = {
        "id": emp_id++,
        "name": name,
        "email": email,
        "department": department,
        "salary": salary
    }
       
    employees.push(arr_data);

    res.status(201).json({
        message: "Data is submitted successfully",
        data: employees
    });

});

app.get('/api/employee', (req, res) => {
    const all_data = employees;
    res.status(200).json({
        message: "Data fetched successfully",
        data: all_data
    });
});

app.get('/api/employee/:id', (req, res) => {
    const urlID = Number(req.params.id);
    const result = employees.find(emp => emp.id == urlID);

    if(!result){
        return res.status(404).json({
            message: "Data not found",
            data: result
        });
    }

    res.json({
        message: 'Single user fected successfully',
        data: result
    });

});

app.put('/api/employee/:id', (req, res) => {
    const url_id = Number(req.params.id);
    const {name, email, department, salary} = req.body;
    
    const result = employees.find(emp => emp.id === url_id);
    if(!result){
        return res.status(404).json({
            message: "Data not found",
            data: result
        });
    }

    result.name = name;
    result.email = email;
    result.department = department;
    result.salary = salary;

    res.json({
        message: "Employee updated successfully",
        final_data: result,
        all_data: employees
    });
});

app.delete('/api/employee/:id', (req, res) => {
    const url_id = Number(req.params.id);

    

    res.json({
        message: "Employee deleted successfully",
        data: url_id
    });
});

app.listen(PORT, () => {
    console.log(`Mern is running on port ${PORT}`);
});