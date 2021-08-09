"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const User = mongoose.model("User");

const SuministroSchema = mongoose.Schema({
    id_usuario:{
        type: Schema.ObjectId,
        ref: "User"
    },
    numero:{
        type: Number,
        required: true
    },
    fechaAlta: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Suministro', SuministroSchema);