import mongose from 'mongose'
const { Schema } = mongose

const operadorSchema = new Schema({
    usuario: {
        type:Object, 
        require
    },
    areas: {
        type:Array,  // area: EArea[]
        require
    }
});
module.exports = mongose.model('Operador',operadorSchema);