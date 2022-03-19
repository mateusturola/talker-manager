const express = require('express');

const route = express.Router();

const { login, validateInput } = require('../Middlewares/login');

route.post('/', validateInput, login);

module.exports = route;