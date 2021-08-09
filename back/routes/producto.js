"use strict";

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');

router.post('/', productoController.new);
router.get('/', productoController.getAll);
router.put('/:id', productoController.update);
router.get('/:id', productoController.get);
router.delete('/:id', productoController.delete);

module.exports = router;