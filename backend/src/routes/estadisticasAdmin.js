const { Router } = require('express');

const router = Router();

const {datosParaGraficar}= require('../controllers/estadisticasAdmin.controllers');

router.route('/estadisticasAdmin')
    .get(datosParaGraficar)
    


module.exports = router;