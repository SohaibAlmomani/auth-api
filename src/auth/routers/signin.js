'use strict';

const express = require('express');
const signInRouters = express.Router();
const basicAuth = require('../middlewares/basic');

signInRouters.post('/signin', basicAuth, (req, res) => {
    res.status(200).json(req.user);
})

module.exports = signInRouters;