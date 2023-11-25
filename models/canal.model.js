const mongoose = require('mongoose');
const { Schema } = mongoose;

const canalSchema = new Schema({
    nombre: {
        type:String, 
        require
    },
    numeroCanal: {
        type:Number, 
        require,
    }
}, { timestamps: true });
module.exports = mongoose.model('canales', canalSchema);