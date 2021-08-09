"use strict"

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

/* Creamos el servidor */
const app = express();

/* Conectamos la BBDD */
connectDB();

/* configuracion */
app.use(express.json()); //para poder usar json
app.use(cors()); //para conectarnos del front

/* Definimos rutas */
app.use("/producto", require('./routes/producto'));
app.use("/tipo", require('./routes/producto_tipo'));

app.listen(8080, () => {
    console.log('Listening on port 8080');
});