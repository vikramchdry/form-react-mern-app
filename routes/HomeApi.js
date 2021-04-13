const express = require('express');

const mongoose = require('mongoose');

const userSchema = require('../models/UserSchema');

//call router 
const router = express.Router();

router.get('/home', (req, res) => {
    res.send("home api is working")
})


module.exports = homeApi;