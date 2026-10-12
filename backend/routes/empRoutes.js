const express = require('express');
const route = express.Router();

const { create_Emp, getAllEmp, singleEmpById, updateEmp, deleteEmp } = require('../controller/employeeController.js');
<<<<<<< HEAD
const validation = require('../middleware/employeeMiddleware.js');
const upload = require('../middleware/upload.js');

route.post('/', upload.single('image'), validation, create_Emp);
=======
const uploads = require('../middleware/upload.js');
const validation = require('../middleware/empMiddleware.js');

route.post('/', uploads.single('image'), validation, create_Emp);
>>>>>>> a609535 (12-oct)
route.get('/', getAllEmp);
route.get('/:id', singleEmpById);
route.put('/:id', updateEmp);
route.delete('/:id', deleteEmp);

module.exports = route;