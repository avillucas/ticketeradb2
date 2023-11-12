// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
const mongoose = require('mongoose');
// *Cargamos el fichero app.js con la configuración de Express
const app = require('./app');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
const port = 3800;
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
const mongoStringConnection = 'mongodb://localhost:27017/ticketera';
//module.exports = connectDB;
// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect(mongoStringConnection,  { useMongoClient: true})
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos se ha realizado correctamente")
        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:3800");
        });
    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));