//'use strict'
require('dotenv').config();
const mongoose = require('mongoose');
const mongoStringConnection = process.env.MONGODB_CONNECT_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(mongoStringConnection, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connect to mongoDB succesfully")
    } catch (error) {
        console.log("Conection Failed");
    }
}

module.exports = connectDB;