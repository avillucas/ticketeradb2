// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos los módulos de express y body-parser
var express = require('express');
//var bodyParser = require('body-parser');
// Llamamos a express para poder crear el servidor
var app = express();
// Importamos las rutas
//var tickets_routes = require('./routes/ticket.route').default; 

// Cargamos el controlador
//const c = require('./controllers/ticket.controller');
//const m = require('./middlewares/ticketValidator.middleware');
// Llamamos al router
//var router = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
//router.get('/ticket',  function (req, res, next) {
//    next();
//}, function (req, res) {
//    return res.status(200).send();
//});
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
//app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json());
// Llamamos al router
//var api = express.Router();
//app.use('/api', api);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;