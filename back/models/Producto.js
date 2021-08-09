"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchema = mongoose.Schema({
    id_tipo:{
        type: Schema.ObjectId,
        ref: "Tipo"
    },
    nombre:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);