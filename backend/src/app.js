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

app.all('/', require('./routes/login'))
app.all('/registro',require('./routes/registro'));
app.all('/estadisticasJugador',require('./routes/estadisticasJugador'));
app.all('/estadisticasAdmin',require('./routes/estadisticasAdmin'));


module.exports = app;