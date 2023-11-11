import mongose from 'mongose'
// TODO  const {ticketEstado} = require ('../enums/ticketEstado.enum.js');
const { Schema } = mongose


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
module.exports = mongose.model('Ticket',ticketSchema);