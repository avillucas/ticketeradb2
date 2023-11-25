'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
const c = require('../controllers/ticket.controller');
const m = require('../middlewares/ticketValidator.middleware');
// Llamamos al router
var router = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
router.get('/ticket',  function (req, res, next) {
    next();
}, function (req, res) {
    return res.status(200).send();
});
//router.get('/ticket/:id', m.middleware.traer, c.controller.traerUno);
//router.post('/ticket', m.middleware.crearUno, c.controller.crearUno);
//router.push('/ticket/:id', m.middleware.modificarUno, c.controller.modificarUno);
//router.delete('/ticket/:id', m.middleware.eliminarUno, c.controller.eliminarUno);
// Exportamos la configuración

module.exports.router = router;