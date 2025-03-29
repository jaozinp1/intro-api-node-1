const express = require('express');
const router = express.Router();

const usuarioApartamentoController = require('../controllers/usuarioApartamento');

router.get('/usuarioApartamento', usuarioApartamentoController.listaUsuariosApartamento);

module.exports = router;