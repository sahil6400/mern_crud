const express = require('express');
const route = express.Router();

const { create_Emp, getAllEmp, singleEmpById, updateEmp, deleteEmp } = require('../controller/employeeController.js');

route.post('/', create_Emp);
route.get('/', getAllEmp);
route.get('/:id', singleEmpById);
route.put('/:id', updateEmp);
route.delete('/:id', deleteEmp);

module.exports = route;