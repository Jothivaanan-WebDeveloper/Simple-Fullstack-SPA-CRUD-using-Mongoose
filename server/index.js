const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin-joe:Jothi%40123@cluster0.htv13wx.mongodb.net/simplecrudDB?retryWrites=true&w=majority", { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connection Successful");
    }
});

const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: [String],
    city: String,
    state: String,
    alive: Boolean,
    zipcode: Number
});

const PersonModel = mongoose.model("personDetail", personSchema);