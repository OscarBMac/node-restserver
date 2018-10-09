require('./config/config');

const express = require('express')
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
    //Configuracion global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, (err, rest) => {

    if (err) throw err;

    console.log('Base de datos Online');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto', process.env.PORT);
});