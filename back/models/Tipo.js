"use strict";

const mongoose = require("mongoose");

const TipoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tipo', TipoSchema);