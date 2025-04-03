const express = require('express');
const router = express.Router();

const Controller = require('../controllers/blocos');

router.get('/blocos', blocosController.listablocos);
router.post('/blocos', blocosController.cadastrarblocos);
router.patch('/blocos', blocosController.editarblocos);
router.delete('/blocos', blocosController.apagarblocos);

module.exports = router;