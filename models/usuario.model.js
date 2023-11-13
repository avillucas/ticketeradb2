var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: {
        type:String, 
        require
    },
    apellido: {
        type:String, 
        require
    },
    email: {
        type:String, 
        require
    },
    documento: {
        type:Number, 
        require
    },
    operario: {
        type:Boolean, 
        require
    }
});
module.exports = mongoose.model('Usuario',usuarioSchema);