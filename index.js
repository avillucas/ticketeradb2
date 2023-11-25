'use strict'
require('dotenv').config();
const connectDB = require('./services/mongose.service')
const TicketModel = require('./models/ticket.model')
const CanalModel = require('./models/canal.model')
const express = require('express');
//
const port = process.env.PORT;
const app = express();
app.use(express.json());
connectDB()
//CANAL 
app.get('/api/v1/canales', async (req, res) => {
    try {
        const data = await CanalModel.find();
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
app.get('/api/v1/canales/:id', async (req, res) => {
    try {
        const data = await CanalModel.findById(req.params.id);
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

app.post('/api/v1/canales', async (req, res) => {
    try {
        const { nombre, numeroCanal } = req.body
        const entity = new CanalModel({ nombre, numeroCanal });
        const data = await entity.save();
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

app.post('/api/v1/canales', async (req, res) => {
    try {
        const { nombre, numeroCanal } = req.body
        const id = req.params.id;
        const data = await CanalModel.findByIdAndUpdate(id, { nombre, numeroCanal }, { new: true })
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
app.delete('/api/v1/canales/:id', async (req, res) => {
    try {
        const data = await CanalModel.findBydIdAnDelete(req.params.id);
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