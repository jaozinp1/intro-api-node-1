const express = require('express');
const router = express.Router();

const blocosController = require('../controllers/blocos');

const mensagensController = require('../controllers/mensagens');

router.get('/blocos', blocosController.listablocos);
router.post('/blocos', blocosController.cadastrarblocos);
router.patch('/blocos/:id', blocosController.editarblocos);
router.delete('/blocos', blocosController.apagarblocos);

router.get('/mensagens', mensagensController.listamensagens);
router.post('/mensagens', mensagensController.cadastrarmensagens);
router.patch('/mensagens/:id', mensagensController.editarmensagens);
router.delete('/mensagens', mensagensController.apagarmensagens);

module.exports = router;