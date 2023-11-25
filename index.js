'use strict'
require('dotenv').config();
const connectDB = require('./services/mongose.service')
const TicketModel = require('./models/ticket.model')
const express = require('express');
//
const port = process.env.PORT;
const app = express();
app.use(express.json());
connectDB()

//todos los tickets
app.get('/api/v1/tickets', async (req, res) => {
    try {
        const data = await TicketModel.find();
        return res.status(200).json({
            message: 'OK ',
            data
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

app.listen(port, () => {
    console.log("Server is running in por " + port);
})