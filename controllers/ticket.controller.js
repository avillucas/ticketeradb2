'use strict'
// Cargamos los modelos para usarlos posteriormente
var ticketModelo = require('../models/ticket.model');

var controller = new Object();
/**
 * TODO completar 
 * @param {*} req 
 * @param {*} res 
 */
controller.traerTodos = function (req, res) {
    return res.status(200).send();
};

/**
 * TODO completar 
 * @param {*} req 
 * @param {*} res 
 */
controller.traerUno = function (req, res) {
    var id = req.params.id;
    //buscar un documento por un  id
    ticketModelo.findById(id, (err, ticket) => {
        if (err) return res.status(500).send({ message: 'Error en la petición' });
        if (!ticket) return res.status(404).send({ message: 'El recurso no existe' });
        return res.status(200).send(value);
    });
};

/**
 * TODO completar 
 * @param {*} req 
 * @param {*} res 
 */
controller.crearUno = function (req, res) {
    return res.status(201).send();
};

controller.modificarUno = function (req, res) {
    return res.status(200).send();
};

/**
 * TODO completar 
 * @param {*} req 
 * @param {*} res 
 */
controller.eliminarUno = function (req, res) {
    return res.status(200).send();
};

module.exports.controller = controller;