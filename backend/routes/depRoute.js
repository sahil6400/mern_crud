const express = require('express');
const route = express.Router();

const { createDep } = require('../controller/departmentController.js');

route.post('/', createDep);

module.exports = route