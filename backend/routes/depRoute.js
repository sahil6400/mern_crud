const express = require('express');
const route = express.Router();

const auth_validation = require('../middleware/authMiddleware.js');
const validation = require('../middleware/departmentMiddleware.js');
const { createDep } = require('../controller/departmentController.js');

route.post('/', auth_validation, validation, createDep);

module.exports = route