import mongose from 'mongose'
const { Schema } = mongose

const oficinaSchema = new Schema({
    direccion: {
        type:String, 
        require
    },
    ubicacion: {
        type:Geolocation, 
        require
    },
    tipo: {
        type:String, 
        require
    }
});
module.exports = mongose.model('Oficina',oficinaSchema);