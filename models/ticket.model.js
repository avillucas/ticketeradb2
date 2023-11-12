var mongoose =  require('mongoose');
// TODO  const {ticketEstado} = require ('../enums/ticketEstado.enum.js');
var Schema = mongoose.Schema;


    /*
    TODO 
Ticket
 - cliente : Cliente
 - estado: ETicketEstado
 - motivos : ETicketMotivo[]
 - //array de valores no tengo
 - historialEventos: Evento[]
 - areasInvolucradas :EArea[] 

    */
const ticketSchema = new Schema({
    client: {
        type:Object, 
        require
    },
    status: {
        type:String, 
        require,
        //default:ticketEstado.demorado
        default:"demorado"
    },
    reason: {
        type:Array, 
        require
    }, 
    trace: {
        type:Array, 
        require
    },
    relatedAreas: {
        type:Array, 
        require
    }
});
module.exports = mongoose.model('Ticket',ticketSchema);