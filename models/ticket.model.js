const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
    cliente: {
        type: Object,
        require
    },
    estado: {
        type: String,
        require,
        //default:ticketEstado.demorado
        default: "demorado"
    },
    razon: {
        type: Array,
        require
    },
    historial: {
        type: Array,
        require
    },
    areasRelacionadas: {
        type: Array,
        require
    }
}, { timestamps: true });
module.exports = mongoose.model('Ticket', ticketSchema);