var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

const ticketSchema = new Schema({
    cliente: {
        type:Object, 
        require
    },
    estado: {
        type:String, 
        require,
        //default:ticketEstado.demorado
        default:"demorado"
    },
    razon: {
        type:Array, 
        require
    }, 
    historial: {
        type:Array, 
        require
    },
    areasRelacionadas: {
        type:Array, 
        require
    }
});
module.exports = mongoose.model('Ticket',ticketSchema);