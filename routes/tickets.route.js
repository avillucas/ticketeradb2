'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var TicketController = require('../controllers/ticket.controller');
// Llamamos al router
var api = express.Router();
//TODO mas adelante var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/ticket/:id', {}, UserController.getUser);
// Exportamos la configuración
module.exports = api;