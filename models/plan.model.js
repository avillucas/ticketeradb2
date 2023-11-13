import mongose from 'mongose'
const { Schema } = mongose

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