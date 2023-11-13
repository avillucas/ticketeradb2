import mongose from 'mongose'
const { Schema } = mongose

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