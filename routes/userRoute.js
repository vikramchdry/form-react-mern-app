const express = require('express');

const mongoose = require('mongoose');
const User = require('../models/UserSchema');

//const userSchema = require('../models/UserSchema');

const bodyParser = require('body-parser');

//call router 
const router = express.Router();
require('dotenv').config();


//home page details

//router.get('/', (req, res) => {
// res.sendFile('index.html', { global: root });
//})

router.get('/', (req, res) => {
  console.log('get request')
  res.send('get the request')
})

//TEsting more get api 

//router.get('/about', (req, res) => {
// res.send(`<h2>About</h2>`)
//})

//post request 

router.post('/user', (req, res) => {

  console.log(req.body)
  const user = new User({
    firstname: req.body.firstname,
    surname: req.body.firstname,
    email: req.body.email,
    dob: req.body.dob,
    gender: req.body.gender
  });

  //user.save().
  // then(result => {
  //  console.log(result)
  //  res.status(200).json({ msg: "succesfully submitted" });
  // }).catch(err => {
  //  console.log(err);
  //  res.status(500).json({ msg: "Error occured" })
  // })

  //-----------------------------email api -------------------//

  

});





module.exports = router;