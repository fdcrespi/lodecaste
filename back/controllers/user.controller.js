"use strict";
const User = require("../models/User");

exports.new = async (req, res) => {
    try {
        let usuario;
        /* creamos nuestro usuario */
        usuario = new User(req.body);
        usuario.password = await usuario.encryptPassword(req.body.password);
        await usuario.save();
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getAll = async (req, res) => {
    try {
        const usuarios = await User.find();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.update = async (req, res) => {
    try {
        const { email, password, tipo } = req.body;
        let usuario = await User.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({msg: 'no existe el usuario'});
        }
        usuario.email = email;
        usuario.password = await usuario.encryptPassword(password);
        usuario.tipo = tipo;
        usuario = await User.findOneAndUpdate({ _id: req.params.id}, usuario, {new: true});
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.get = async (req, res) => {
    try {
        let usuario = await User.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({msg: 'no existe el usuario'});
        }
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.delete = async (req, res) => {
    try {
        let usuario = await User.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg: 'no existe el usuario'});
        }
        await User.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Usuario eliminado con exito'});
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}