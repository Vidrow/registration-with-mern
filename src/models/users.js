const mongoose = require("mongoose")

//Designing Database
const userData = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        Confirmpassword: {
            type: String,
            required: true
        }

    })


//Creating collections

const Register = new mongoose.model("Register",userData)

module.exports = Register