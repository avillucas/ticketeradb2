var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

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