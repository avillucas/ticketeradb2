import mongose from 'mongose'
const { Schema } = mongose


    /*
    TODO 

Plan   ( cargar  => normal , SuperPack1, SuperPackFull) dejar mas de
uno a la vez
 - nombre: String
 - version: int => cada version del mismo plan es la que define los canales
 - canales: Canal[]

    */
const planSchema = new Schema({
    nombre: {
        type:String, 
        require
    },
    version: {
        type:Number, 
        require,
        default:1
    },
    canales: {
        type:Array, 
        require
    }
});
module.exports = mongose.model('Plan',planSchema);