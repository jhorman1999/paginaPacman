const estadisticasJugador = {};

const UserModel = require('../models/Users');
const EstadisticasJugadorModel = require('../models/EstadisticasJugador');

estadisticasJugador.registrarEstadisticas = async (req, res) => {
    const { correo, puntaje, tiempoDeJuego, resultadoPartida } = req.body;

    const newEsadisticaJugador = new EstadisticasJugadorModel({
        correo: correo,
        puntaje: puntaje,
        tiempoDeJuego: tiempoDeJuego,
        resultadoPartida: resultadoPartida,
    });

    const resultado = await newEsadisticaJugador.save(); 
    res.json({ resultado: resultado, });

}

estadisticasJugador.datosParaGraficar = async (req, res) => {

    const correo= req.query.correo;
    
    const estadisticas = await EstadisticasJugadorModel.find({ correo: correo  });
   
   var puntajeTotal=0;
   partidasGanadas=0;
   minutosJugados=0;
   segundosJugados=0;
    for (i=0; i<estadisticas.length ; i++ ){
        //puntaje total
        puntajeTotal += parseInt( estadisticas[i].puntaje);
        //cantidad partidas ganadas
        if(estadisticas[i].resultadoPartida==="ganada"){
            partidasGanadas++;
        }
        var tiempo=  estadisticas[i].tiempoDeJuego;
        
        var tiempoAux =tiempo.split(":");
        minutosJugados += parseInt(tiempoAux[0]);
        segundosJugados += parseInt(tiempoAux[1]);
    }
    minutosJugados += parseInt(segundosJugados/60);
    
    segundosJugados = parseInt(segundosJugados%60);

    res.json({ totalPartidas:estadisticas.length,
        puntajeTotal: puntajeTotal,
        partidasGanadas: partidasGanadas,
        minutosJugados:minutosJugados,
        segundosJugados:segundosJugados
     });
}

module.exports = estadisticasJugador;