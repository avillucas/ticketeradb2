'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
const c = require('../controllers/ticket.controller');
// Llamamos al router
var router = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controlador
//CRUD
router.get('/ticket/:id', c.traerTodos); 
router.get('/ticket/:id', c.traerUno);
router.post('/ticket', c.crearUno);
router.delete('/ticket/:id', c.eliminarUno);
//Ejemplos de cada  comparador
router.get('/eq', c.traerTicketsEq);
router.get('/ne', c.traerTicketsNe);
router.get('/gt', c.traerTicketsGt);
router.get('/gte', c.traerTicketsGte);
router.get('/lt', c.traerTicketsLt);
router.get('/lte', c.traerTicketsLte);
router.get('/in', c.traerTicketsIn);
router.get('/nin', c.traerTicketsNin);
//ejemplos de operadores logicos
router.get('/or', c.traerTicketsOr);
router.get('/and', c.traerTicketsAnd);
router.get('/nor', c.traerTicketsNor);
router.get('/not', c.traerTicketsNot);

//ejemplos de geolocalizacion 
router.get('/near', c.traerTicketsNear);
router.get('/geowithin', c.traerTicketsGeoWithin);
router.get('/geointersects', c.traerTicketsGeoIntersects);

//ejemplos de agregation
router.get('/text', c.traerTicketsText);
router.get('/exists', c.traerTicketsExists);
router.get('/all', c.traerTicketsAll);
router.get('/elemmatch', c.traerTicketsElemMatch);
router.get('/size', c.traerTicketsSize);
router.get('/errores', c.traerClientesDesperfectos);
router.get('/unwindgroup', c.informesUnwindGroup);
router.get('/lookup', c.traerTicketsEmpleados);

module.exports = router;
