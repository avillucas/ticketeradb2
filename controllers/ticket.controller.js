'use strict'
// Cargamos los modelos para usarlos posteriormente
var Ticket = require('../models/ticket.model');

// Conseguir datos de un usuario
function getTicket(req, res) {
    var id = req.params.id;
    //buscar un documento por un  id
    Ticket.findById(id, (err, ticket) => {
        if (err) return res.status(500).send({ message: 'Error en la petición' });
        if (!ticket) return res.status(404).send({ message: 'El recurso no existe' });
        return res.status(200).send(value);
    });
}
