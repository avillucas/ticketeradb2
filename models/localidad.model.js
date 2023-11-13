import mongose from 'mongose'
const { Schema } = mongose

const localidadSchema = new Schema({
    nombre: {
        type:String, 
        require
    },
    codigoPostal:{
        type:String, 
        require
    }
});
module.exports = mongose.model('Localidad',localidadSchema);