import mongose from 'mongose'
const { Schema } = mongose


    /*
    TODO 
Cliente:
  - ubicacionInstalacion: Geotype
  - usuario:Usuario
  - planes:Plan[]
  - localidad: Localidad

    */
const clienteSchema = new Schema({
    usuario: {
        type:Object, 
        require
    },
    ubicacionInstalacion: {
        type:Geolocation, 
        require,
        //default:ticketEstado.demorado
        default:"demorado"
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