import mongose from 'mongose'
const { Schema } = mongose

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

const clienteSchema = new Schema({
    nombre: {
        type: String,
        require
    },
    apellido: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    documento: {
        type: Number,
        require
    },
    operario: {
        type: Boolean,
        require
    },
    ubicacionInstalacion: {
        type: GeoSchema,
        require
    },
    plan: {
        nombre: String,
        cantCanales: Number,
        canales: [String]
    },
    localidad: {
        codigoPostal: Number,
        descripcion: String
    },
});

module.exports = mongose.model('Cliente', clienteSchema);