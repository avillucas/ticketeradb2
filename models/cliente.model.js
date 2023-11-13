import mongose from 'mongose'
const { Schema } = mongose

const clienteSchema = new Schema({
    usuario: {
        type:Object, 
        require
    },
    ubicacionInstalacion: {
        type:Geolocation, 
        require
    },
    planes: {
        type:Array, 
        require
    }, 
    localidad: {
        type:Object, 
        require
    }
});
module.exports = mongose.model('Cliente',clienteSchema);