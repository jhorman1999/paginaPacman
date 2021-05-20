const estadisticasAdmin = {};

const UserModel = require('../models/Users');
const EstadisticasJugadorModel = require('../models/EstadisticasJugador');


estadisticasAdmin.datosParaGraficar = async (req, res) => {

    //jugadores conectados
    const jugadoresConectados = await UserModel.find({ estado: "conectado" });

    // jugadores registrados a lo largo del tiempo

    var jugadoresRegistrados =  await   UserModel.aggregate(
        [
            {
                "$group": {
                    "_id":   { $dateToString: { format: "%Y-%m-%d", date: "$updated"}    },
                    "total": {
                        "$sum": 1
                    }
                }
            },{ $sort : { _id : 1 } }

        ] )

         
   

    //enviar datos
    res.json(
        {
            jugadoresConectados: jugadoresConectados.length,
            
            jugadoresRegistrados: jugadoresRegistrados,
        });
}

module.exports = estadisticasAdmin;