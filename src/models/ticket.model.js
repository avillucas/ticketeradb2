const mongoose = require('mongoose');
const ticketEstadoEnum = require('../enums/ticketEstado.enum');
const ticketMotivoEnum = require('../enums/ticketMotivo.enum');
const ticketAreaEnum = require('../enums/ticketAreas.enum');
const { Schema } = mongoose;
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});
const ticketSchema = new Schema({
    fechaCreacion: {
        type: String,
        require
    },
    cliente: {
        nombre: String,
        apellido: String,
        dni: Number,
        email: String,
        telefonos: [String],
        localidad: {
            codigoPostal: Number,
            descripcion: String
        },
    },
    estado: {
        type: String,
        require,
        default: ticketEstadoEnum.abierto
    },
     ubicacion: {
        geolocalizacion: GeoSchema,
        properties: {
            name: String
        }
    },
    motivo: {
        type: String,
        require,
        default: ticketMotivoEnum.desperfecto
    },
    historial: [
        {
            fecha: Date,
            area: {
                type: String,
                require,
                default: ticketAreaEnum.atencionCliente
            },
            operarios: [
                {
                    nombreyApellido: String,
                    resultados: [
                        {
                            detalle: String,
                            solucionado: Boolean
                        }
                    ]
                }
            ]
        }
    ]
}, { timestamps: true });

GeoSchema.index({ 'geolocalizacion': '2dsphere' });
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;