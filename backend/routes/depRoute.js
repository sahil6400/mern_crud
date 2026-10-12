const express = require('express');
const route = express.Router();

const { createDep } = require('../controller/departmentController.js');
const validation = require('../middleware/departmentMiddleware.js');

route.post('/', validation, createDep);

module.exports = route