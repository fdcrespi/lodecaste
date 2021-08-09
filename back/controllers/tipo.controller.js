"use strict";
const Tipo = require("../models/Tipo");

exports.new = async (req, res) => {
    try {
        let tipo;
        /* creamos nuestro tipo */
        tipo = new Tipo(req.body);
        await tipo.save();
        res.send(tipo);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getAll = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.json(tipos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.update = async (req, res) => {
    try {
        const { nombre } = req.body;
        let tipo = await Tipo.findById(req.params.id);
        if (!tipo) {
            res.status(404).json({msg: 'no existe el tipo de producto'});
        }
        tipo.nombre = nombre;
        tipo = await Tipo.findOneAndUpdate({ _id: req.params.id}, tipo, {new: true});
        res.json(tipo);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.get = async (req, res) => {
    try {
        let tipo = await Tipo.findById(req.params.id);
        if (!tipo) {
            res.status(404).json({msg: 'no existe el tipo de producto'});
        }
        res.json(tipo);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.delete = async (req, res) => {
    try {
        let tipo = await Tipo.findById(req.params.id);
        if(!tipo){
            res.status(404).json({msg: 'no existe el tipo de producto'});
        }
        await Tipo.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Tipo de producto eliminado con exito'});
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}