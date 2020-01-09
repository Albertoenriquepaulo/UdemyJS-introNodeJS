//ESTAS LINEAS CONFIGURAN EL SERVIDOR LOCAL

// Importar Express
const express = require('express')
const routes = require('./routes')
const path = require('path')

const configs = require('./config');

/**
 * Base de Datos usada -> https://remotemysql.com/dashboard.php
 * user: Albertoenriquepaulo@hotmail.com
 * pass:X--------T
 */
const db = require('./config/database');
db.authenticate()
    .then(() => console.log('DB Connected'))
    .catch(error => console.log(error)
    );

const app = express();

// Habilitar PUG
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta estática llamada Public
app.use(express.static('public'));

//Validar si estamos en Desarrollo o Produccion
const config = configs[app.get('env')]; //env es una variable que existe en node para detectar el ambiente en el que estamos
//Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;



// Muestra el año actual
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear(); //fecha actual es como una variable que se puede leer en cualquier lugar, incluso en los templates
    return next(); // el next es para que continue ejecutando la próxima función
})

// .use para que reaccione a todos:  get, post, etc
app.use('/', routes());

app.listen(3000);