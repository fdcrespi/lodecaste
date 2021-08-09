"use strict";
const Producto = require("../models/Producto");

exports.new = async (req, res) => {
    try {
        let producto;
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getAll = async (req, res) => {
    try {
        const producto = await Producto.find();
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.update = async (req, res) => {
    try {
        const { numero } = req.body;
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({msg: 'no existe el suministro'});
        }
        producto.numero = numero;
        producto = await Producto.findOneAndUpdate({ _id: req.params.id}, producto, {new: true});
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.get = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({msg: 'no existe el suministro'});
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.delete = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: 'no existe el suministro'});
        }
        await Producto.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Suministro eliminado con exito'});
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}