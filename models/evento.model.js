import { suppressDeprecationWarnings } from 'moment/moment';
import mongose from 'mongose'
const { Schema } = mongose

const eventoSchema = new Schema({
    inicio: { //unixtimestamp
        type: Number,
        require
    },
    responsable: { //Operador
        type: Object,
        require
    },
    estadoFinalEvento: {
        type: String,  //tIcketEstado
        require
    },
    notas: {
        type: suppressDeprecationWarnings
    }
});
module.exports = mongose.model('Evento', eventoSchema);