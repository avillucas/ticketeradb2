'use strict'
require('dotenv').config();
const connectDB = require('./src/services/mongose.service')
const express = require("express");
const cors = require("cors");
const rutasTicket = require('./src/routes/ticket.route');
const PORT = process.env.PORT || 9000;
//DB
connectDB()
//Init
const app = express();
app.use(express.json());
app.use(cors());
//ruteo
app.use('/api/tickets', rutasTicket);
//
app.listen(PORT, () => {
  console.log(`Server en puerto ${PORT}`);
});
