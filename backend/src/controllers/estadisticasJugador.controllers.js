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

    const users = await UserModel.find({ correo: correo });
    const puntajeTotalAux=parseInt( users[0].puntajeTotal)+parseInt( puntaje);
    const usersAux = await UserModel.findOneAndUpdate({ correo: correo },{puntajeTotal:puntajeTotalAux});

    res.json({ resultado: resultado, });
    

}

estadisticasJugador.datosParaGraficar = async (req, res) => {

    const correo= req.query.correo;
    //consultar estadisticas
    const estadisticas = await EstadisticasJugadorModel.find({ correo: correo  });
    //consultar puntaje total user
    const user = await UserModel.find({ correo: correo  });
   //datos partidas ganadas
   var puntajeTotal=user[0].puntajeTotal;
   var partidasGanadas=0;
   var minutosJugados=0;
   var segundosJugados=0;

    for (i=0; i<estadisticas.length ; i++ ){
       
        
        //cantidad partidas ganadas
        if(estadisticas[i].resultadoPartida==="ganada"){
            partidasGanadas++;
        }
        // tiempo gastado jugando
        var tiempo=  estadisticas[i].tiempoDeJuego;
        var tiempoAux =tiempo.split(":");
        minutosJugados += parseInt(tiempoAux[0]);
        segundosJugados += parseInt(tiempoAux[1]);
    }
    minutosJugados += parseInt(segundosJugados/60);
    segundosJugados = parseInt(segundosJugados%60);

    
    //jugadores conectados
    const jugadoresConectados = await UserModel.find({ estado: "conectado"  });

    // los 10 puntajes mas altos
    const tablaPuntajes = await UserModel.find({},{_id:0,correo:1,puntajeTotal:1}).sort( { "puntajeTotal": -1 } ).limit(10);
    var arrayPuntajes

    //enviar datos
    res.json({ totalPartidas:estadisticas.length,
        puntajeTotal: puntajeTotal,
        partidasGanadas: partidasGanadas,
        minutosJugados:minutosJugados,
        segundosJugados:segundosJugados,
        jugadoresConectados: jugadoresConectados.length,
        //los 10 puntajes mas altos
        tablaPuntajes:tablaPuntajes,

     });
}

module.exports = estadisticasJugador;