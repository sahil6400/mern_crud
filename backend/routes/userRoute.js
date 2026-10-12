const express = require('express');
const route = express.Router();

const validation = require('../middleware/userMiddleware.js');
const login_validation = require('../middleware/loginMiddleware.js');
const { create_user, check_login } = require('../controller/userController.js');

route.post('/create', validation, create_user);
route.post('/login', login_validation, check_login);

module.exports = route;