// Utilizar funcionalidades del Ecmascript 6
//'use strict'
const mongoose = require('mongoose');
const mongoStringConnection = 'mongodb://localhost:27017/ticketera';
const connectDB = async () => {
    try {
        await mongoose.connect(mongoStringConnection, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connect to mongoDB succesfully")
    } catch (error) {
        console.log("Conection Failed");
    }
}

module.exports = connectDB;