"use strict";

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.new);
router.get('/', userController.getAll);
router.put('/:id', userController.update);
router.get('/:id', userController.get);
router.delete('/:id', userController.delete);

module.exports = router;