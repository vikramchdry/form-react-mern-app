require('dotenv').config();
const express = require("express");
const fs = require('fs');
const apis = require('./routes/userRoute');
const path = require('path');
const cors = require('cors');
const userSchema = require('./models/UserSchema');

const bodyParser = require('body-parser');
const request = require('request');




//database mongoose
//---------------------------------------

const mongoose = require('express');
const connectDB = require('./config/db');
const axios = require('axios');
const { response } = require('express');
connectDB();
//----------------------------------



const app = express();
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());


//-----------------------------------------------------
// send flie using fs method

// router calling API......... home page

app.use('/', apis);
//app.use(express.static('public'));

// index.html file path  
const root = path.join(__dirname, 'client', 'build');
//console.log(root)

app.get('*', (req, res) => {
    fs.stat(root + req.path, (err) => {
        if (err) {
            res.sendFile("index.html", { root });
        } else {
            res.sendFile(req.path, { root });
        }
    })
})


//app.get('/getdata', (req, res) => {
 //   const request = require('request');
  //  request('http://www.google.com', function (error, response, body) {
   //     console.error('error:', error); // Print the error if one occurred
   //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
       // console.log('body:', body); // Print the HTML for the Google homepage.
   /// });

//});


app.get('/verify', async (req, res) => {
    const api_url = `https://extensi.io/api/email-validator.php?email=karol@wp.pl`;
    const response = await axios(api_url);
    const json = await response.json();
    res.json(json)
        ;

})





//listinng to 🇵ort 
//Envirement variable 

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running........ ${PORT}`)
});