// users data model

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    dob: {
        type: Date
    },
    gender: {
        type: String
    }

    //noeed to make collecetions to database


});

module.exports = mongoose.model('User', UserSchema);
