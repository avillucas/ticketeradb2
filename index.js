// Utilizar funcionalidades del Ecmascript 6
//'use strict'
const express = require('express');
//var bodyParser = require('body-parser');
// lamamos a express para poder crear el servidor
const app = express();
app.use(express.json);
// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
// *Caramos el fichero pp.js con la configuración de Express
//const app = require('./app');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
const port = 80;
// Le indicamos a Mongoose que haremos la conexión con Promesas
//mongoose.Promise = global.Promise;
//const mongoStringConnection = 'mongodb://localhost:27017/ticketera';
//module.exports = connectDB;
// Usamos el método connect para conectarnos a nuestra base de datos
/*
mongoose.connect(mongoStringConnection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
    console.log("La conexión a la base de datos se ha realizado correctamente")
        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:3800");
        });
    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));
    */
const connectDB = require('./services/mongose.service')
connectDB()
const TicketModel = require('./models/ticket.model')
app.get('/api/v1/tickets', async (req, res) => {
    try {
        const data = await TicketModel.find();
        return res.status(200).json({
            message: 'OK',
            data
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

app.listen(port, () => {
    console.log("Server is running in por " + port);
})