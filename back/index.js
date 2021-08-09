"use strict"

const express = require('express');
const connectDB = require('./config/db');

/* Creamos el servidor */
const app = express();

/* Conectamos la BBDD */
connectDB();

/* configuracion */
app.use(express.json()); //para poder usar json

/* Definimos rutas */
app.use("/producto", require('./routes/producto'));
app.use("/tipo", require('./routes/producto_tipo'));

app.listen(8080, () => {
    console.log('Listening on port 8080');
});