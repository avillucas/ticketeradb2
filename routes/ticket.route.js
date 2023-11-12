'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
//const TicketController = require( '../controllers/ticket.controller');
var Ticket = require('../models/ticket.model');

// Conseguir datos de un usuario

// Llamamos al router
var api = express.Router();
var ticketValidator = require('../middlewares/ticketValidator.middleware');
//TODO mas adelante var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/ticket/:id',  function (req, res, next) {
    next();
}, function (req, res) {
    var id = req.params.id;
    //buscar un documento por un  id
    Ticket.findById(id, (err, ticket) => {
        if (err) return res.status(500).send({ message: 'Error en la petición' });
        if (!ticket) return res.status(404).send({ message: 'El recurso no existe' });
        return res.status(200).send(value);
    });
});
// Exportamos la configuración
export default router;