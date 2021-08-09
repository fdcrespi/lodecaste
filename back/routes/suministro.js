"use strict";

const express = require('express');
const router = express.Router();
const suministroController = require('../controllers/suministro.controller');

router.post('/', suministroController.new);
router.get('/', suministroController.getAll);
router.put('/:id', suministroController.update);
router.get('/:id', suministroController.get);
router.delete('/:id', suministroController.delete);

module.exports = router;