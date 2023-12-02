'use strict'
const ticketEstadoEnum = require('../enums/ticketEstado.enum');
const ticketMotivoEnum = require('../enums/ticketMotivo.enum');
// Cargamos los modelos para usarlos posteriormente
var Ticket = require('../models/ticket.model');

/**
 * Hello word
 * @param {*} req 
 * @param {*} res 
 */
exports.sayHello = async function (req, res) {
  try {
    res.status(200).json("Hello word");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/**
 * retorna todos los tickets 
 * @param {*} req 
 * @param {*} res 
 */
exports.traerTodos = async function (req, res) {
  try {
    const tickets = await Ticket.find();
    return res.status(200).json(tickets);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

/**
 * Retorna un ticket
 * @param {*} req 
 * @param {*} res 
 */
exports.traerUno = async function (req, res) {
  try {
    var id = req.params.id;
    const tickets = await Ticket.findById(id);
    return res.status(200).json(tickets);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

/**
 * TODO completar 
 * @param {*} req 
 * @param {*} res 
 */
exports.crearUno = async function (req, res) {
  try {
    const ticketSolicitado = new Ticket(req.body);
    const ticket = await ticketSolicitado.save();
    res.status(201).json(ticket);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};


/**
 * TODO completar 
 * @param {*} req 
 * @param {*} res 
 */
exports.eliminarUno = async function (req, res) {
  try {
    var id = req.params.id;
    const ticketEliminado = await Ticket.deleteOne(id);
    res.status(200).json(ticketEliminado);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
  return res.status(200).send();
};

//OPERADORES - - $eq, $gt, $gte, $lt, $lte, $ne, $in, $nin

//GET - ($eq) Traer tickets en estado ABIERTO
exports.traerTicketsEq = async (req, res) => {
  try {
    const result = await Ticket.find({ "estado": { $eq: ticketEstadoEnum.TicketEstado.TicketEstado.abierto } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($gt) Traer tickets con fecha de creacion mayor a principios enero 2023
exports.traerTicketsGt = async (req, res) => {
  try {
    const gt = await Ticket.find({ "fechaCreacion": { $gt: "2023-01-01" } });
    res.status(200).json(gt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($gte) Traer tickets con fecha de creacion mayor o igual a enero 2023
exports.traerTicketsGte = async (req, res) => {
  try {
    const gte = await Ticket.find({ "fechaCreacion": { $gte: "2023-01-01" } });
    res.status(200).json(gte);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($lt) Traer tickets creados previas o iguales a  enero 2023
exports.traerTicketsLt = async (req, res) => {
  try {
    const lt = await Ticket.find({ "fechaCreacion": { $lt: "2023-01-02" } });
    res.status(200).json(lt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($lte) Traer tickets creadis antes o el 10 de enero de 2023
exports.traerTicketsLte = async (req, res) => {
  try {
    const lt = await Ticket.find({ "fechaCreacion": { $lte: "2023-01-10" } });
   
    res.status(200).json(tc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($ne) Traer tickets en estado NO resuelto
exports.traerTicketsNe = async (req, res) => {
  try {
    const traerTicketsNe = await Ticket.find({ "estado": { $ne: ticketEstadoEnum.TicketEstado.resuelto } });
    res.status(200).json(traerTicketsNe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($in) Traer tickets que estan en demorado/pendiente
exports.traerTicketsIn = async (req, res) => {
  try {
    const traerTicketsIn = await Ticket.find({ "estado": { $in: [ticketMotivoEnum.demorado, ticketEstadoEnum.TicketEstado.pendiente] } });
    res.status(200).json(traerTicketsIn);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($nin) Traer tickets que no esten en estado ni "resuelto" ni "cancelado"
exports.traerTicketsNin = async (req, res) => {
  try {
    const ticketsNin = await Ticket.find({ "estado": { $nin: [ticketEstadoEnum.TicketEstado.resuelto, ticketEstadoEnum.TicketEstado.cancelado] } });
    res.status(200).json(ticketsNin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($or) Traer tickets en estado abierto o motivo desperfecto
exports.traerTicketsOr = async (req, res) => {
  try {
    const traerTicketsOr = await Ticket.find({
      $or: [
        { "estado": ticketEstadoEnum.TicketEstado.abierto },
        { "motivo": ticketMotivoEnum.desperfecto }
      ]
    });
    res.status(200).json(traerTicketsOr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($and) Traer tickets donde el cliente es empleado y el estado es "abierto".
exports.traerTicketsAnd = async (req, res) => {
  try {
    const traerTicketsAnd = await Ticket.find({
      $and: [
        { "cliente.esEmpleado": true },
        { "estado": ticketEstadoEnum.TicketEstado.abierto }
      ]
    });
    res.status(200).json(traerTicketsAnd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($nor) Traer tickets donde el cliente no es empleado y el estado no es "resuelto".
exports.traerTicketsNor = async (req, res) => {
  try {
    const traerTicketsNor = await Ticket.find({
      $nor: [
        { "cliente.esEmpleado": true },
        { "estado": ticketEstadoEnum.TicketEstado.resuelto }
      ]
    });
    res.status(200).json(traerTicketsNor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($not) Traer tickets donde el estado no es "pendiente".
exports.traerTicketsNot = async (req, res) => {
  try {
    const traerTicketsNot = await Ticket.find({
      "estado": { $not: { $eq: ticketEstadoEnum.TicketEstado.pendiente } }
    });
    res.status(200).json(traerTicketsNot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GEOESPACIALES - $near, $geoWithin, $geoIntersects  ($near) Traer clientes que viven cerca del  punto -70.6506, -33.4378 
exports.traerTicketsNear = async (req, res) => {
  try {
    const ticketsCercanos = await Ticket.find({
      'cliente.ubicacion.geolocalizacion': {
        $near: {
          $geometry: { type: "Point", coordinates: [-70.6506, -33.4378] },
          $maxDistance: 1000
        }
      }
    });
    res.status(200).json(ticketsCercanos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($geoWithin) Traer clientes del area aldedor de la plaza mitre
exports.traerTicketsGeoWithin = async (req, res) => {
  try {
    const ticketsEnArea = await Ticket.find({
      'cliente.ubicacion.geolocalizacion': {
        $geoWithin: {
          $geometry: {
            type: "Polygon",
            coordinates: [
              [
                [
                  -58.367051146592885,
                  -34.66155605449324
                ],
                [
                  -58.36971189793573,
                  -34.66284445721147
                ],
                [
                  -58.367845080461194,
                  -34.665756526526145
                ],
                [
                  -58.36170818623479,
                  -34.66200611525318
                ],
                [
                  -58.36507704075797,
                  -34.658529111759016
                ],
                [
                  -58.367051146592885,
                  -34.66155605449324
                ]
              ]
            ]
          }
        }
      }
    });
    res.status(200).json(ticketsEnArea);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//GET - ($geoIntersects) Traer clientes que viven sobre la calle Belgrano
exports.traerTicketsGeoIntersects = async (req, res) => {
  try {
    const ticketsIntersectando = await Ticket.find({
      'cliente.ubicacion.geolocalizacion': {
        $geoIntersects: {
          $geometry: {
            type: "LineString",
            coordinates: [
              [
                -58.36839831596094,
                -34.66419364702507
              ],
              [
                -58.36639831596094,
                -34.66219364702507
              ]
            ]
          }
        }
      }
    });
    res.status(200).json(ticketsIntersectando);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//BUSQUEDA TEXTO - $text, $search
//GET - ($text y $search) Traer los clientes con la palabra "interrupcion" en su comentario
exports.traerTicketsText = async (req, res) => {
  try {
    const resultado = await Ticket.aggregate([
      { $match: { $text: { $search: "interrupción" } } },
      { $project: { cliente: 1, comentarioCliente: 1, infoTicket: 1 } }
    ]);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//AGREGATION
//GET - ($exists) Traer tickets que tienen comentario de cliente 
exports.traerTicketsExists = async (req, res) => {
  try {
    const ticketsConComentarios = await Ticket.find({
      "comentarioCliente": { $exists: true, $ne: "" }
    });
    res.status(200).json(ticketsConComentarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($all) Traer clientes que tienen Canal 10 
exports.traerTicketsAll = async (req, res) => {
  try {
    const buscados = [10];
    const todos = await Ticket.find({
      "cliente.plan.canales": { $all: buscados }
    });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// TODO GET - ($elemMatch) Traer tickets con solucion exitosa
exports.traerTicketsElemMatch = async (req, res) => {
  try {
    const ticketsConDerivacionExitosa = await Ticket.find({
      "derivacion.historialDerivaciones": {
        $elemMatch: { "responsables.soluciones.exito": true }
      }
    });
    res.status(200).json(ticketsConDerivacionExitosa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($size) Traer tickets con 1 delegaciones
exports.traerTicketsSize = async (req, res) => {
  try {
    const delegaciones = 1;
    const cantidad = await Ticket.find({
      "derivacion.historialDerivaciones": { $size: delegaciones }
    });
    res.status(200).json(cantidad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($unwind, $match, $group, $project) Qué desperfecto ocurre, dónde, cada cuánto, etc.
exports.traerClientesDesperfectos = async (req, res) => {
  try {
    const resultado = await Ticket.aggregate([
      { $unwind: "$infoTicket" },
      { $match: { "Ticket.motivo": { $exists: true } } },
      {
        $group: {
          _id: "$Ticket.motivo",
          ubicaciones: { $addToSet: "$cliente.ubicacion.geolocalizacion.coordinates" },
          frecuencia: { $sum: 1 }
        }
      },
      {
        $project: {
          motivo: "$_id",
          ubicaciones: 1,
          frecuencia: 1,
          _id: 0
        }
      }
    ]);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET TODO - ($unwind y $group) Traer los responsables de tickets y la cantidad de tickets atendidos
exports.informesUnwindGroup = async (req, res) => {
  try {
    const informe = await Ticket.aggregate([
      { $unwind: "$detalle" },
      {
        $group: {
          _id: {
            nombre: "$Ticket.responsableTicket.nombre",
            apellido: "$Ticket.responsableTicket.apellido"
          },
          totalTickets: { $sum: 1 }
        }
      },
      {
        $project: {
          responsable: { $concat: ["$_id.nombre", " ", "$_id.apellido"] },
          totalTickets: 1,
          _id: 0
        }
      },
      { $sort: { totalTickets: -1 } }
    ]);
    res.status(200).json(informe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET - ($lookup, $match y $project) Traer los clientes que son empleados y generaron ticket
exports.traerTicketsEmpleados = async (req, res) => {
  try {
    const informe = await Ticket.aggregate([
      {
        $lookup: {
          from: "clientes",
          localField: "cliente.dni",
          foreignField: "dni",
          as: "clienteInfo"
        }
      },
      {
        $unwind: {
          path: "$clienteInfo"
        }
      },
      {
        $match: {
          "clienteInfo.esEmpleado": true
        }
      },
      {
        $project: {
          "nombreCliente": "$clienteInfo.nombre",
          "apellidoCliente": "$clienteInfo.apellido",
          "dniCliente": "$clienteInfo.dni",
          "emailCliente": "$clienteInfo.contacto.email",
          "telefonosCliente": "$clienteInfo.contacto.telefonos",
          "ubicacionCliente": "$clienteInfo.ubicacion",
        }
      }
    ]);
    res.status(200).json(informe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
