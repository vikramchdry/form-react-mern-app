require('dotenv').config();
const express = require("express");
const fs = require('fs');
const apis = require('./routes/userRoute');
const path = require('path');
const cors = require('cors');
const userSchema = require('./models/UserSchema');





//database mongoose
//---------------------------------------

const mongoose = require('express');
const connectDB = require('./config/db');
connectDB();
//----------------------------------



const app = express();
app.use(cors());
app.use(express.json());


//-----------------------------------------------------
// send flie using fs method

// router calling API......... home page

app.use('/', apis);
//app.use(express.static('public'));

// index.html file path  
const root = path.join(__dirname, 'client/build');

app.get('*', (req, res) => {
    fs.stat(root + req.path, (err) => {
        if (err) {
            res.sendFile("index.html", { root });
        } else {
            res.sendFile(req.path, { root });
        }
    })
})









//listinng to 🇵ort 
//Envirement variable 

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running........ ${PORT}`)
});