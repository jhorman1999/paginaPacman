const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//settings configuraciones

//puerto para servicio en la nube
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes rutas

app.use('/', require('./routes/login'))
app.use('/registro',require('./routes/registro'));
app.use('/estadisticasJugador',require('./routes/estadisticasJugador'));
app.use('/estadisticasAdmin',require('./routes/estadisticasAdmin'));

app.use(express.static('../../public'));

module.exports = app;