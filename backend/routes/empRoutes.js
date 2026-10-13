const express = require('express');
const route = express.Router();

const { create_Emp, getAllEmp, singleEmpById, updateEmp, deleteEmp } = require('../controller/employeeController.js');
const uploads = require('../middleware/upload.js');
const validation = require('../middleware/empMiddleware.js');

route.post('/', uploads.single('image'), validation, create_Emp);
route.get('/', getAllEmp);
route.get('/:id', singleEmpById);
route.put('/:id', updateEmp);
route.delete('/:id', deleteEmp);

module.exports = route;