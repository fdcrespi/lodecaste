"use strict";
const Suministro = require("../models/Suministro");

exports.new = async (req, res) => {
    try {
        let suministro;
        suministro = new Suministro(req.body);
        await suministro.save();
        res.send(suministro);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getAll = async (req, res) => {
    try {
        const suministros = await Suministro.find();
        res.json(suministros);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.update = async (req, res) => {
    try {
        const { numero } = req.body;
        let suministro = await Suministro.findById(req.params.id);
        if (!suministro) {
            res.status(404).json({msg: 'no existe el suministro'});
        }
        suministro.numero = numero;
        suministro = await Suministro.findOneAndUpdate({ _id: req.params.id}, suministro, {new: true});
        res.json(suministro);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.get = async (req, res) => {
    try {
        let suministro = await Suministro.findById(req.params.id);
        if (!suministro) {
            res.status(404).json({msg: 'no existe el suministro'});
        }
        res.json(suministro);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.delete = async (req, res) => {
    try {
        let suministro = await Suministro.findById(req.params.id);
        if(!suministro){
            res.status(404).json({msg: 'no existe el suministro'});
        }
        await Suministro.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Suministro eliminado con exito'});
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}