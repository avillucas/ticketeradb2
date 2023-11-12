// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');
// Llamamos a express para poder crear el servidor
var app = express();
// Importamos las rutas
//var tickets_routes = require('./routes/ticket.route').default; 
//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cargamos las rutas

var Ticket = require('../models/ticket.model');

// Conseguir datos de un usuario

// Llamamos al router
var api = express.Router();
//var ticketValidator = require('../middlewares/ticketValidator.middleware');
//TODO mas adelante var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/ticket/:id', function (req, res) {
    var id = req.params.id;
    //buscar un documento por un  id
    Ticket.findById(id, (err, ticket) => {
        if (err) return res.status(500).send({ message: 'Error en la petición' });
        if (!ticket) return res.status(404).send({ message: 'El recurso no existe' });
        return res.status(200).send(value);
    });
});

api.get('/tickets/', function (req, res) {
    //buscar un documento por un  id
    Ticket.find({}, (err, tickets) => {
        if (err) return res.status(500).send({ message: 'Error en la petición' });
        if (!tickets) return res.status(404).send({ message: 'El recurso no existe' });
        return res.status(200).send(tickets);
    });
});

app.use('/api', api);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;