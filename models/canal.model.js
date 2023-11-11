import mongose from 'mongose'
const { Schema } = mongose
    /*

Canal
 - nombre:String
 - numeroCanal: int

    */
const canalSchema = new Schema({
    nombre: {
        type:String, 
        require
    },
    numeroCanal: {
        type:Number, 
        require,
    }
});
module.exports = mongose.model('Canal',canalSchema);