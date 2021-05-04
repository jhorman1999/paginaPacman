const { Router } = require('express');

const router = Router();

const {datosParaGraficar,registrarEstadisticas}= require('../controllers/estadisticasJugador.controllers');

router.route('/estadisticasJugador')
    .get(datosParaGraficar)
    .post(registrarEstadisticas);


module.exports = router;