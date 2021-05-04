const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
    correo: {
        type: String,
        required: true,
        trim: true
    },
    puntaje: {
        type: String,
        required: true,
        trim: true,
    },   
    tiempoDeJuego: {
        type: String,
        required: true,
        trim: true
    },
    fechaPartida: { type: Date, default: Date.now },
    resultadoPartida: {
        type: String,
        required: true ,
        trim: true
    },
});

module.exports= model('EstadisticasJugador',usersSchema)