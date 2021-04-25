const express = require('express');
const cors = require('cors');
const app = express();

//settings configuraciones

//puerto para servicio en la nube
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes rutas

app.all('/', require('./routes/login'))
app.all('/registro',require('./routes/registro'));

module.exports = app;