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
app.use("/api/user", require('./routes/user'));
app.use("/api/suministro", require('./routes/suministro'));

app.listen(8080, () => {
    console.log('Listening on port 8080');
});